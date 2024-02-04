export const PORT = 3000;

const URL_BASE = `http://localhost:${PORT}`;
const API_USERS = URL_BASE + `/api/users`;
const API_AUTH = URL_BASE + '/api/auth';

const AUTH_LOGIN = API_AUTH + '/login';
const AUTH_REGISTER = API_AUTH + '/register';
const AUTH_VERIFY_TOKEN = API_AUTH + '/verify-token';

export const URLS = {
	API_USERS,
	AUTH_LOGIN,
	AUTH_REGISTER,
	AUTH_VERIFY_TOKEN
};
