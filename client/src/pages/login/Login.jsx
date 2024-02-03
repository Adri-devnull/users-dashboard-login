import { useState } from 'react';

const Login = () => {
	// USER GUARDA LA INFORMACION DEL USUARIO QUE SE ESTA LOGEANDO
	const [user, setUser] = useState({});
	console.log(user);
	return (
		<div>
			<form onSubmit={submitDefault}>
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

const submitDefault = event => {
	event.preventDefault();
};

const getInputValues = (input, user, setUser) => {
	const { name, value } = input;
	const updatedUserInfo = { ...user, [name]: value };
	setUser(updatedUserInfo);
};

export default Login;
