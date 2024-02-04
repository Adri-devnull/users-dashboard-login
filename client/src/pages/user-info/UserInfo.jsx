import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { deleteData, patchData } from '../../utils/api/users.api';

const UserInfo = () => {
	const { state: data } = useLocation();
	const navigate = useNavigate();
	const [showDelete, setShowDelete] = useState(false);
	const [updateUserInfo, setUpdateUserInfo] = useState({});
	const [showEdit, setShowEdit] = useState(false);
	return (
		<div>
			{data && (
				<div>
					<h2>{data.name}</h2>
					<h2>{data.username}</h2>
					<h2>{data.email}</h2>
					<h2>{data.active ? 'Active' : 'Inactive'}</h2>
					<h2>Created date</h2>
					<button onClick={() => navigate('/')}>Return</button>
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
			{showDelete && (
				<div>
					<h2>Are you sure you want to delete the user?</h2>
					<div>
						<button onClick={() => deleteUser(data.id, navigate)}>Yes</button>
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
							defaultValue={data.name}
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
							defaultValue={data.username}
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
							defaultValue={data.email}
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
						onClick={() => updateNewUserInfo(data.id, updateUserInfo, navigate)}
					>
						Save Changes
					</button>
				</form>
			)}
		</div>
	);
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
const deleteUser = async (id, navigate) => {
	await deleteData(`${URLS.API_USERS}/${id}`);
	navigate('/');
};

export default UserInfo;
