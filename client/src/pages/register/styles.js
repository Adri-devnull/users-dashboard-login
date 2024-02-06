import styled from 'styled-components';

const StyledFormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 380px;
	height: 100vh;
`;

const StyledForm = styled.form`
	background-color: #f0f0ff;
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	padding: 20px 40px;
	width: 100%;
`;

const StyledLabel = styled.label`
	display: block;
	padding: 10px 0px;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #483d8b;
	border-radius: 5px;
	font-size: 1em;
	&:focus {
		outline: none;
	}
`;

const StyledDarkButton = styled.button`
	background-color: #050328;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	font-size: 1rem;
	letter-spacing: 1px;
`;

const StyledDarkButtonCancel = styled(StyledDarkButton)`
	background-color: crimson;
`;
const StyledButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const StyledImageWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin-bottom: 40px;
	justify-content: space-around;
`;

const StyledImg = styled.img`
	margin-right: 10px;
	border-radius: 50%;
	width: 100px;
`;

const StyledRandomImageButton = styled.button`
	background-color: #6c63ff;
	color: #fff;
	padding: 8px 16px;
	border: none;
	border-radius: 5px;
`;

const StyledRadioGroup = styled.div`
	display: flex;
	align-items: center;
	margin: 15px 0px 15px 0px;
`;

const StyledRadioLabel = styled.label`
	margin-right: 15px;
`;

const StyledRadioInput = styled.input`
	margin-right: 20px;
`;

export {
	StyledButtonsContainer,
	StyledDarkButton,
	StyledDarkButtonCancel,
	StyledForm,
	StyledFormContainer,
	StyledImageWrapper,
	StyledImg,
	StyledInput,
	StyledLabel,
	StyledRadioGroup,
	StyledRadioInput,
	StyledRadioLabel,
	StyledRandomImageButton
};
