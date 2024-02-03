import { useNavigate } from 'react-router-dom';

const User = ({ id, name, username, email }) => {
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
			</div>
			<div>
				<button
					onClick={() => showUserInfo(id, name, username, email, navigate)}
				>
					View Profile
				</button>
			</div>
		</div>
	);
};

// FUNCION PARA MOSTRAR LA INFORMACION DEL USUARIO
const showUserInfo = (id, name, username, email, navigate) => {
	const info = {
		firstName: name,
		usrname: username,
		mail: email
	};
	navigate(`/userinfo/${id}`, { state: info });
};

export default User;
