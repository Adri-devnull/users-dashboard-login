import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/dataFunctions';

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
				<button onClick={() => createUser(infoUser, navigate)}>Register</button>
			</form>
		</div>
	);
};

const submitDefault = event => {
	event.preventDefault();
};

const getInputValues = (input, infoUser, setInfoUser) => {
	const { name, value } = input;
	const updatedUserInfo = { ...infoUser, [name]: value };
	setInfoUser(updatedUserInfo);
};

// FUNCION PARA CREAR AL USUARIO
const createUser = async (infoUser, navigate) => {
	await postData(URLS.USER_API, infoUser);
	navigate('/');
};
export default Register;
