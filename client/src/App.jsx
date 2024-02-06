import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/Auth.provider';
import { ModalProvider } from './providers/Modal.provider';
import UsersProvider from './providers/Users.provider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<ModalProvider>
					<UsersProvider>
						<AuthProvider>
							<Router />
						</AuthProvider>
					</UsersProvider>
				</ModalProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
