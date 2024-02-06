import styled from 'styled-components';

const StyledLoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const StyledLoginForm = styled.form`
	background-color: #f0f0ff;
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	padding: 20px 40px;
	width: 380px;
`;

const StyledLoginLabel = styled.label`
	display: block;
	padding: 10px 0px;
`;

const StyledLoginInput = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #483d8b;
	border-radius: 5px;
	font-size: 1em;
	&:focus {
		outline: none;
	}
`;

const StyledLoginButton = styled.button`
	background-color: #050328;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	font-size: 1em;
`;

const StyledButtonContainer = styled.div`
	padding: 10px 0px;
	width: 200px;
	margin-inline: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledDarkButtonCancel = styled.button`
	background-color: crimson;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	font-size: 1rem;
	letter-spacing: 1px;
`;

export {
	StyledButtonContainer,
	StyledDarkButtonCancel,
	StyledLoginButton,
	StyledLoginContainer,
	StyledLoginForm,
	StyledLoginInput,
	StyledLoginLabel
};
