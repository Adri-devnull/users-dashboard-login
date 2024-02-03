import { useNavigate } from 'react-router-dom';
import { StyledCard } from './styles';

const User = ({ id, name, username, email, active, gender }) => {
	const navigate = useNavigate();
	return (
		<StyledCard>
			<div>
				<img src='' alt='' />
			</div>
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
			</div>
			<div>
				<button
					onClick={() =>
						showUserInfo(id, name, username, email, active, gender, navigate)
					}
				>
					View Profile
				</button>
			</div>
		</StyledCard>
	);
};

// FUNCION PARA MOSTRAR LA INFORMACION DEL USUARIO
const showUserInfo = (id, name, username, email, active, gender, navigate) => {
	const info = {
		name,
		username,
		email,
		id,
		active,
		gender
	};
	console.log(info);
	navigate(`/userinfo/${id}`, { state: info });
};

export default User;
