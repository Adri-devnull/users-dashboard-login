import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';
import { UsersContext } from '../../contexts/UsersContext';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import { logoutUser } from '../../utils/api/auth.api';
import Modal from '../modal/Modal';
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
	const { content, setContent } = useContext(ModalContext);
	const { setUsers } = useContext(UsersContext);
	const location = useLocation();
	const pathname = location.pathname;
	const isRootPath = !pathname.includes('userinfo');

	return (
		<>
			<StyledHeader>
				<div>
					<StyledTitle>Userstagram</StyledTitle>
				</div>
				<div>
					{!userData && (
						<StyledList>
							<StyledLinks
								onClick={() => setContent(<Register setUsers={setUsers} />)}
							>
								Register
							</StyledLinks>
							<StyledLinks onClick={() => setContent(<Login />)}>
								Login
							</StyledLinks>
						</StyledList>
					)}
					{userData && isRootPath && (
						<StyledContainerImg>
							<StyledButtonHeader onClick={() => userLogout(setUserData)}>
								<StyledImg src='/logout.svg' alt='' />
								<StyledSpan>Log out</StyledSpan>
							</StyledButtonHeader>
						</StyledContainerImg>
					)}
				</div>
				<Modal closeModal={() => setContent()} withButtonClose={false}>
					{content}
				</Modal>
			</StyledHeader>
		</>
	);
};

const userLogout = setUserData => {
	logoutUser(setUserData);
};

export default Header;
