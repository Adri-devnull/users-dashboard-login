import User from '../user/User';
import { StyledCardContainer } from './styles';

const UsersList = ({ users }) => {
	if (!users) return <h2>Loading...</h2>;
	return (
		<StyledCardContainer>
			{users.map(user => (
				<User key={user._id} {...user} />
			))}
		</StyledCardContainer>
	);
};

export default UsersList;
