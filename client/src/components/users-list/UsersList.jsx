import User from '../user/User';

const UsersList = ({ users }) => {
	return (
		<div>
			{users &&
				users.map(user => (
					<User
						key={user._id}
						id={user._id}
						name={user.name}
						username={user.username}
						email={user.email}
						active={user.active}
					/>
				))}
		</div>
	);
};

export default UsersList;
