import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import Layout from '../layouts/Layout';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import UserInfo from '../pages/user-info/UserInfo';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/userinfo/:id' element={<UserInfo />} />
			</Route>
		</Routes>
	);
};

export default Router;
