import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledCard,
	StyledCardContainer,
	StyledImg,
	StyledNames,
	StyledUsername,
	SytledActive,
	SytledInactive
} from './styles';

const User = ({ _id: id, name, username, active, img }) => {
	const navigate = useNavigate();
	return (
		<StyledCardContainer>
			<StyledCard>
				<div>
					<StyledImg $active={active} src={img} alt='' />
				</div>
				<StyledNames>
					<h2>{name}</h2>
					<StyledUsername>@{username}</StyledUsername>
					{active && <SytledActive>Activo</SytledActive>}
					{!active && <SytledInactive>Inactivo</SytledInactive>}
				</StyledNames>
				<div>
					<StyledButton onClick={() => showUserInfo(navigate, id)}>
						View Profile
					</StyledButton>
				</div>
			</StyledCard>
		</StyledCardContainer>
	);
};

// FUNCION PARA MOSTRAR LA INFORMACION DEL USUARIO
const showUserInfo = (navigate, id) => {
	console.log(id);
	navigate(`/userinfo/${id}`);
};

export default User;
