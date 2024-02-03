import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<h1>Userstagram</h1>
			</div>
			<div>
				<ul>
					<Link to={'/register'}>Register</Link>
					<Link to={'/login'}>Login</Link>
				</ul>
			</div>
		</StyledHeader>
	);
};

export default Header;
