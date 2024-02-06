import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';
import { loginRequest } from '../../utils/api/auth.api';
import {
	StyledButtonContainer,
	StyledDarkButtonCancel,
	StyledLoginButton,
	StyledLoginContainer,
	StyledLoginForm,
	StyledLoginInput,
	StyledLoginLabel
} from './styles';

const Login = () => {
	// USER GUARDA LA INFORMACION DEL USUARIO QUE SE ESTA LOGEANDO
	const [user, setUser] = useState({});
	const { setUserData } = useContext(AuthContext);
	const { setContent } = useContext(ModalContext);
	const navigate = useNavigate();
	return (
		<StyledLoginContainer>
			<StyledLoginForm
				onSubmit={event => submitDefault(event, user, setUserData, navigate)}
			>
				<div>
					<StyledLoginLabel htmlFor='email'>Email</StyledLoginLabel>
					<StyledLoginInput
						type='text'
						name='email'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</div>
				<div>
					<StyledLoginLabel htmlFor='password'>Password</StyledLoginLabel>
					<StyledLoginInput
						type='text'
						name='password'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</div>
				<StyledButtonContainer>
					<StyledLoginButton>Login</StyledLoginButton>
					<StyledDarkButtonCancel
						type='button'
						onClick={() => {
							setContent();
						}}
					>
						Cancel
					</StyledDarkButtonCancel>
				</StyledButtonContainer>
			</StyledLoginForm>
		</StyledLoginContainer>
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
