import { useContext, useState } from 'react';
import { UsersContext } from '../../contexts/UsersContext';
import Filters from '../filters/Filters';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const Main = () => {
	const [filter, setFilter] = useState(0);
	const { users } = useContext(UsersContext);
	if (users.length === 0) return <h1>Loading...</h1>;
	const filteredUsers = filterUsersByActive(users, filter);
	return (
		<StyledMain>
			<Filters setFilter={setFilter} />
			<UsersList users={filteredUsers} />
		</StyledMain>
	);
};

// FUNCION PARA FILTRAR LOS USUARIOS POR ACTIVOS, INACTIVOS O TODOS
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

export default Main;
