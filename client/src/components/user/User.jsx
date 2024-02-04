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

const User = ({ id, name, username, email, active, gender, img }) => {
	const navigate = useNavigate();
	return (
		<StyledCardContainer>
			<StyledCard>
				<div>
					<StyledImg active={active} src={img} alt='' />
				</div>
				<StyledNames>
					<h2>{name}</h2>
					<StyledUsername>@{username}</StyledUsername>
					{active && <SytledActive>Activo</SytledActive>}
					{!active && <SytledInactive>Inactivo</SytledInactive>}
				</StyledNames>
				<div>
					<StyledButton
						onClick={() =>
							showUserInfo(
								id,
								name,
								username,
								email,
								active,
								gender,
								img,
								navigate
							)
						}
					>
						View Profile
					</StyledButton>
				</div>
			</StyledCard>
		</StyledCardContainer>
	);
};

// FUNCION PARA MOSTRAR LA INFORMACION DEL USUARIO
const showUserInfo = (
	id,
	name,
	username,
	email,
	active,
	gender,
	img,
	navigate
) => {
	const info = {
		name,
		username,
		email,
		id,
		active,
		gender,
		img
	};
	console.log(info);
	navigate(`/userinfo/${id}`, { state: info });
};

export default User;
