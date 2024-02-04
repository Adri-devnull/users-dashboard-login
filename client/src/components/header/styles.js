import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #141416;
	padding: 0px 30px;
`;

const StyledTitle = styled.h1`
	color: #ece7f7;
	margin-right: 5px;
`;

const StyledList = styled.ul`
	display: flex;
	gap: 15px;
`;

const StyledLinks = styled(Link)`
	background-color: #483d8b;
	color: white;
	border: 1px solid #ffffff;
	padding: 5px 10px;
	border-radius: 20px;
`;

export { StyledHeader, StyledLinks, StyledList, StyledTitle };
