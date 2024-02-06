import { useEffect, useState } from 'react';
import { URLS } from '../constants/urls';
import { UsersContext } from '../contexts/UsersContext';
import { getData } from '../utils/api/users.api';

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<UsersContext.Provider value={{ users, setUsers }}>
			{children}
		</UsersContext.Provider>
	);
};

// FUNCION PARA OBTENER TODOS LOS USUARIOS DE LA BD
const getAllUsers = async setUsers => {
	const allUsers = await getData(URLS.API_USERS);
	setUsers(allUsers);
};
export default UsersProvider;
