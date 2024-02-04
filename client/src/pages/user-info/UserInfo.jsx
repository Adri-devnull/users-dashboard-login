import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../utils/api/auth.api';
import { deleteData, getDataById, patchData } from '../../utils/api/users.api';

const UserInfo = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [showDelete, setShowDelete] = useState(false);
	const [updateUserInfo, setUpdateUserInfo] = useState({});
	const [showEdit, setShowEdit] = useState(false);
	const [user, setUser] = useState();
	const { userData, setUserData } = useContext(AuthContext);

	useEffect(() => {
		getUserData(id, setUser);
	}, []);

	if (!user) return <h2>Loading...</h2>;
	const { _id, name, username, email, active } = user;
	const isLogedUser = userData.id === _id;
	return (
		<div>
			<div>
				<h2>{name}</h2>
				<h2>{username}</h2>
				<h2>{email}</h2>
				<h2>{active ? 'Active' : 'Inactive'}</h2>
				<h2>Created date</h2>
				<button onClick={() => navigate('/')}>Return</button>
				{isLogedUser && (
					<div>
						<button onClick={() => showEditUserForm(showEdit, setShowEdit)}>
							Edit
						</button>
						<button
							onClick={() => showMsgBeforeDeleteUser(showDelete, setShowDelete)}
						>
							Delete profile
						</button>
					</div>
				)}
			</div>

			{showDelete && (
				<div>
					<h2>Are you sure you want to delete the user?</h2>
					<div>
						<button onClick={() => deleteUser(_id, navigate, setUserData)}>
							Yes
						</button>
						<button
							onClick={() => showMsgBeforeDeleteUser(showDelete, setShowDelete)}
						>
							No
						</button>
					</div>
				</div>
			)}
			{showEdit && (
				<form onSubmit={submitDefault}>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							defaultValue={name}
							onChange={event =>
								getNewInfoUserToUpdate(
									event.target,
									updateUserInfo,
									setUpdateUserInfo
								)
							}
						/>
					</div>
					<div>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							name='username'
							defaultValue={username}
							onChange={event =>
								getNewInfoUserToUpdate(
									event.target,
									updateUserInfo,
									setUpdateUserInfo
								)
							}
						/>
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							name='email'
							defaultValue={email}
							onChange={event =>
								getNewInfoUserToUpdate(
									event.target,
									updateUserInfo,
									setUpdateUserInfo
								)
							}
						/>
					</div>
					<button
						onClick={() => updateNewUserInfo(_id, updateUserInfo, navigate)}
					>
						Save Changes
					</button>
				</form>
			)}
		</div>
	);
};

// FUNCION PARA OBTENER DATOS USUARIO
const getUserData = async (id, setUser) => {
	const data = await getDataById(`${URLS.API_USERS}/${id}`);
	setUser(data);
};

// FUNCION PARA EDITAR USUARIO
const updateNewUserInfo = async (id, updateUserInfo, navigate) => {
	await patchData(`${URLS.API_USERS}/${id}`, updateUserInfo);
	navigate('/');
};

// FUNCION PARA OBTENER INFORMACION DEL NUEVO USUARIO
const getNewInfoUserToUpdate = (input, updateUserInfo, setUpdateUserInfo) => {
	const { name, value } = input;
	const newInfoUser = { ...updateUserInfo, [name]: value };
	setUpdateUserInfo(newInfoUser);
};

// FUNCION PARA MOSTRAR FORM PARA EDITAR USUARIO
const showEditUserForm = (showEdit, setShowEdit) => {
	setShowEdit(!showEdit);
};

// FUNCION PARA PREVENIR EVENTO POR DEFECTO DEL FORMULARIO
const submitDefault = event => {
	event.preventDefault();
};

// FUNCION MOSTRAR MENSAJE ANTES DE ELIMINAR USUARIO
const showMsgBeforeDeleteUser = (showDelete, setShowDelete) => {
	setShowDelete(!showDelete);
};

// FUNCION PARA ELIMINAR USUARIO
const deleteUser = async (id, navigate, setUserData) => {
	await deleteData(`${URLS.API_USERS}/${id}`);
	logoutUser(setUserData, navigate);
};

export default UserInfo;
