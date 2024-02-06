const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const createAccessToken = require("../utils/jwt");
const TOKEN_SECRET = require("../config/token.config");

const authController = {};

authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await UserModel.findOne({ email });

    if (!userFound)
      return res.status(400).send({
        error: "The email does not exist"
      });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).send({
        error: "The password is incorrect"
      });
    }

    const token = await createAccessToken({
      id: userFound._id
    });

    return res.cookie("token", token).send({
      id: userFound._id,
      name: userFound.name,
      username: userFound.username,
      email: userFound.email,
      active: userFound.active,
      image: userFound.image
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

authController.register = async (req, res) => {
  const { name, username, email, password, gender, img, active } = req.body;

  try {
    // Generar un hash de la contraseña
    const saltRounds = 10; // Número de rondas de sal para la encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
      name,
      username,
      email,
      active,
      gender,
      img,
      password: hashedPassword // Guarda la contraseña encriptada en la base de datos
    });

    await newUser.save();
    const updatedUsers = await UserModel.find();
    res.status(201).send(updatedUsers);
  } catch (error) {
    console.error("Error al registrar al usuario:", error);
    res.status(500).send({ error: "Error al registrar al usuario" });
  }
};

authController.verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send({ message: "Not Token" });

  try {
    const tokenInfo = jwt.verify(token, TOKEN_SECRET);
    const userFound = await UserModel.findById(tokenInfo.id);

    if (!userFound) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({
      id: userFound._id,
      name: userFound.name,
      username: userFound.username,
      email: userFound.email,
      active: userFound.active,
      gender: userFound.gender,
      img: userFound.img
    });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

module.exports = authController;
