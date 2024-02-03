const Filters = ({ setFilter }) => {
	return (
		<div>
			<button onClick={() => setFilter(0)}>All users</button>
			<button onClick={() => setFilter(1)}>Active users</button>
			<button onClick={() => setFilter(2)}>Inactive users</button>
		</div>
	);
};

export default Filters;
