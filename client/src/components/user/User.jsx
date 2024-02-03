import { useNavigate } from 'react-router-dom';
import { StyledCard } from './styles';

const User = ({ id, name, username, email, active }) => {
	const navigate = useNavigate();
	return (
		<StyledCard>
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
			</div>
			<div>
				<button
					onClick={() =>
						showUserInfo(id, name, username, email, active, navigate)
					}
				>
					View Profile
				</button>
			</div>
		</StyledCard>
	);
};

// FUNCION PARA MOSTRAR LA INFORMACION DEL USUARIO
const showUserInfo = (id, name, username, email, active, navigate) => {
	const info = {
		firstName: name,
		usrname: username,
		mail: email,
		userId: id,
		status: active
	};
	navigate(`/userinfo/${id}`, { state: info });
};

export default User;
