import { useContext, useState } from 'react';
import { URLS } from '../../constants/urls';
import { ModalContext } from '../../contexts/ModalContext';
import { postData } from '../../utils/api/users.api';
import { randomNumber } from '../../utils/generateRandomNumber';
import {
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
} from './styles';

const Register = ({ setUsers }) => {
	// INFOUSER GUARDA LA INFORMACION DEL NUEVO USUARIO QUE SE ESTA REGISTRANDO
	const [infoUser, setInfoUser] = useState({});
	const { setContent } = useContext(ModalContext);
	return (
		<StyledFormContainer>
			<StyledForm onSubmit={submitDefault}>
				<div>
					<StyledLabel htmlFor='name'>Name</StyledLabel>
					<StyledInput
						type='text'
						name='name'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<StyledLabel htmlFor='username'>Username</StyledLabel>
					<StyledInput
						type='text'
						name='username'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<StyledLabel htmlFor='email'>Email</StyledLabel>
					<StyledInput
						type='text'
						name='email'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<StyledLabel htmlFor='password'>Password</StyledLabel>
					<StyledInput
						type='text'
						name='password'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<StyledRadioGroup>
					<StyledRadioLabel htmlFor='woman'>Women</StyledRadioLabel>
					<StyledRadioInput
						type='radio'
						id='women'
						name='gender'
						value='women'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
					<StyledRadioLabel htmlFor='men'>Man</StyledRadioLabel>
					<StyledRadioInput
						type='radio'
						id='men'
						name='gender'
						value='men'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</StyledRadioGroup>
				<StyledImageWrapper>
					<StyledImg src={infoUser.img} alt='' />
					<StyledRandomImageButton
						onClick={() =>
							generateRandomImage(infoUser.gender, infoUser, setInfoUser)
						}
					>
						Random Avatar
					</StyledRandomImageButton>
				</StyledImageWrapper>
				<StyledButtonsContainer>
					<StyledDarkButton
						onClick={() => createUser(infoUser, setUsers, setContent)}
					>
						Register
					</StyledDarkButton>
					<StyledDarkButtonCancel type='button' onClick={() => setContent()}>
						Cancel
					</StyledDarkButtonCancel>
				</StyledButtonsContainer>
			</StyledForm>
		</StyledFormContainer>
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
const createUser = async (infoUser, setUsers, setContent) => {
	const updatedUsers = await postData(URLS.AUTH_REGISTER, infoUser);
	setUsers(updatedUsers);
	setContent();
};
export default Register;
