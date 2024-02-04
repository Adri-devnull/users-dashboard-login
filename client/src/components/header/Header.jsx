import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../utils/api/auth.api';
import {
	StyledButtonHeader,
	StyledContainerImg,
	StyledHeader,
	StyledImg,
	StyledLinks,
	StyledList,
	StyledSpan,
	StyledTitle
} from './styles';

const Header = () => {
	const { userData, setUserData } = useContext(AuthContext);
	return (
		<StyledHeader>
			<div>
				<StyledTitle>Userstagram</StyledTitle>
			</div>
			<div>
				{!userData && (
					<StyledList>
						<StyledLinks to={'/register'}>Register</StyledLinks>
						<StyledLinks to={'/login'}>Login</StyledLinks>
					</StyledList>
				)}
				{userData && (
					<StyledContainerImg>
						<StyledButtonHeader onClick={() => userLogout(setUserData)}>
							<StyledImg src='/logout.svg' alt='' />
							<StyledSpan>Log out</StyledSpan>
						</StyledButtonHeader>
					</StyledContainerImg>
				)}
			</div>
		</StyledHeader>
	);
};

const userLogout = setUserData => {
	logoutUser(setUserData);
};

export default Header;
