import styled from 'styled-components';

const StyledFiltersContainer = styled.div`
	display: flex;
	margin-bottom: 20px;
	width: 100%;
	justify-content: space-evenly;
`;

const StyledButton = styled.button`
	padding: 10px 20px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	border-radius: 8px;
	color: #fff;
	background-color: rgba(106, 0, 255, 0.05);
	border: 1px solid #ffffff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export { StyledButton, StyledFiltersContainer };
