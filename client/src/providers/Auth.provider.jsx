import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { checkLogin } from '../utils/api/auth.api';

export const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	console.log(userData);

	useEffect(() => {
		checkLogin(setUserData, setLoading);
	}, []);

	return (
		<AuthContext.Provider value={{ userData, setUserData, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
