import { StyledHeader, StyledLinks, StyledList, StyledTitle } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<StyledTitle>Userstagram</StyledTitle>
			</div>
			<div>
				<StyledList>
					<StyledLinks to={'/register'}>Register</StyledLinks>
					<StyledLinks to={'/login'}>Login</StyledLinks>
				</StyledList>
			</div>
		</StyledHeader>
	);
};

export default Header;
