import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/dataFunctions';
import Filters from '../filters/Filters';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const Main = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<StyledMain>
			<Filters />
			<UsersList users={users} />
		</StyledMain>
	);
};

// FUNCION PARA OBTENER TODOS LOS USUARIOS DE LA BD
const getAllUsers = async setUsers => {
	const allUsers = await getData(URLS.USER_API);
	setUsers(allUsers);
};

export default Main;
