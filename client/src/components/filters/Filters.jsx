import { StyledButton, StyledFiltersContainer } from './styles';

const Filters = ({ setFilter }) => {
	return (
		<StyledFiltersContainer>
			<StyledButton onClick={() => setFilter(0)}>All users</StyledButton>
			<StyledButton onClick={() => setFilter(1)}>Active users</StyledButton>
			<StyledButton onClick={() => setFilter(2)}>Inactive users</StyledButton>
		</StyledFiltersContainer>
	);
};

export default Filters;
