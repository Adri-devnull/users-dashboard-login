import { useLocation, useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { deleteData } from '../../utils/dataFunctions';

const UserInfo = () => {
	const { state: data } = useLocation();
	const navigate = useNavigate();
	return (
		<div>
			{data && (
				<div>
					<h2>{data.firstName}</h2>
					<h2>{data.usrname}</h2>
					<h2>{data.mail}</h2>
					<h2>Created date</h2>
					<button onClick={() => navigate('/')}>Return</button>
					<button>Edit</button>
					<button onClick={() => deleteUser(data.id)}>Delete profile</button>
				</div>
			)}
		</div>
	);
};

// FUNCION PARA ELIMINAR USUARIO

const deleteUser = async id => {
	await deleteData(`${URLS.USER_API}/${id}`);
};

export default UserInfo;
