import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/dataFunctions';
import Filters from '../filters/Filters';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const Main = () => {
	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState(0);
	const filteredUsers = filterUsersByActive(users, filter);
	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<StyledMain>
			<Filters setFilter={setFilter} />
			<UsersList users={filteredUsers} />
		</StyledMain>
	);
};

const filterUsersByActive = (users, filter) => {
	const filteredUsers = [...users];
	switch (filter) {
		case 0:
			return filteredUsers;
		case 1:
			return filteredUsers.filter(user => user.active);
		case 2:
			return filteredUsers.filter(user => !user.active);
	}
};

// FUNCION PARA OBTENER TODOS LOS USUARIOS DE LA BD
const getAllUsers = async setUsers => {
	const allUsers = await getData(URLS.USER_API);
	setUsers(allUsers);
};

export default Main;
