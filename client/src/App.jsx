import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
