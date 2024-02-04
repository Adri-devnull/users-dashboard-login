import User from '../user/User';
import { StyledCardContainer } from './styles';

const UsersList = ({ users }) => {
	return (
		<StyledCardContainer>
			{users &&
				users.map(user => (
					<User
						key={user._id}
						id={user._id}
						name={user.name}
						username={user.username}
						email={user.email}
						active={user.active}
						gender={user.gender}
						img={user.img}
					/>
				))}
		</StyledCardContainer>
	);
};

export default UsersList;
