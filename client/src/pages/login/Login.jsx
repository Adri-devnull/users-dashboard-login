import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { loginRequest } from '../../utils/api/auth.api';

const Login = () => {
	// USER GUARDA LA INFORMACION DEL USUARIO QUE SE ESTA LOGEANDO
	const [user, setUser] = useState({});
	const { setUserData } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<div>
			<form
				onSubmit={event => submitDefault(event, user, setUserData, navigate)}
			>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						name='password'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</div>
				<button>Login</button>
			</form>
		</div>
	);
};

const submitDefault = async (event, user, setUserData, navigate) => {
	event.preventDefault();
	await loginRequest(user, setUserData);
	navigate('/');
};

const getInputValues = (input, user, setUser) => {
	const { name, value } = input;
	const updatedUserInfo = { ...user, [name]: value };
	setUser(updatedUserInfo);
};

export default Login;
