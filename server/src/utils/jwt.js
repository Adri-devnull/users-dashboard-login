const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require("../config/token.config");

const createAccessToken = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

module.exports = createAccessToken;
