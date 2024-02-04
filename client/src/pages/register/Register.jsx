import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api/users.api';
import { randomNumber } from '../../utils/generateRandomNumber';

const Register = () => {
	// INFOUSER GUARDA LA INFORMACION DEL NUEVO USUARIO QUE SE ESTA REGISTRANDO
	const [infoUser, setInfoUser] = useState({});
	const navigate = useNavigate();
	return (
		<div>
			<form onSubmit={submitDefault}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						name='password'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='woman'>Women</label>
					<input
						type='radio'
						id='women'
						name='gender'
						value='women'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
					<label htmlFor='men'>Man</label>
					<input
						type='radio'
						id='men'
						name='gender'
						value='men'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<img src={infoUser.img} alt='' />
					<button
						onClick={() =>
							generateRandomImage(infoUser.gender, infoUser, setInfoUser)
						}
					>
						Random Avatar
					</button>
				</div>

				<button onClick={() => createUser(infoUser, navigate)}>Register</button>
				<button onClick={() => navigate('/')} type='button'>
					Back
				</button>
			</form>
		</div>
	);
};
// FUNCION PARA PREVENIR EL COMPORTAMIENTO DEL FORMULARIO POR DEFECTO
const submitDefault = event => {
	event.preventDefault();
};

// FUNCION PARA OBETENER EL VALOR ACTIVE DEL USUARIO ALEATORIAMENTE
const getRandomActiveValueOfUser = () => Math.random() < 0.5;

// FUNCION PARA OBTENER LOS VALORES DEL NUEVO USUARIO
const getInputValues = (input, infoUser, setInfoUser, setSelectedGender) => {
	const isActive = getRandomActiveValueOfUser();
	const { name, value } = input;
	const updatedUserInfo = { ...infoUser, [name]: value, active: isActive };
	setInfoUser(updatedUserInfo);
};

// FUNCION PARA GENERAR IMAGEN ALEATORIA
const generateRandomImage = (gender, infoUser, setInfoUser) => {
	const randNumber = randomNumber();
	const url = `https://randomuser.me/api/portraits/med/${gender}/${randNumber}.jpg`;
	setInfoUser({ ...infoUser, img: url });
};

// FUNCION PARA CREAR AL USUARIO
const createUser = async (infoUser, navigate) => {
	await postData(URLS.AUTH_REGISTER, infoUser);
	navigate('/');
};
export default Register;
