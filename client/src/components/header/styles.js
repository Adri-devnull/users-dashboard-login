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

const StyledImg = styled.img`
	width: 30px;
	height: 30px;
`;

const StyledSpan = styled.span`
	font-size: 0.8em;
	color: #fff;
`;

const StyledContainerImg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledButtonHeader = styled.button`
	background-color: transparent;
	border: none;
`;

export {
	StyledButtonHeader,
	StyledContainerImg,
	StyledHeader,
	StyledImg,
	StyledLinks,
	StyledList,
	StyledSpan,
	StyledTitle
};
