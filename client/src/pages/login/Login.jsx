import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { loginRequest } from '../../utils/api/auth.api';

const Login = () => {
	// USER GUARDA LA INFORMACION DEL USUARIO QUE SE ESTA LOGEANDO
	const [user, setUser] = useState({});
	const { setUserData } = useContext(AuthContext);
	console.log(user);
	return (
		<div>
			<form onSubmit={event => submitDefault(event, user, setUserData)}>
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

const submitDefault = async (event, user, setUserData) => {
	event.preventDefault();
	await loginRequest(user, setUserData);
};

const getInputValues = (input, user, setUser) => {
	const { name, value } = input;
	const updatedUserInfo = { ...user, [name]: value };
	setUser(updatedUserInfo);
};

export default Login;
