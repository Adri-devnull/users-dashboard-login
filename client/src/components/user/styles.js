import styled from 'styled-components';

const StyledCardContainer = styled.div``;

const StyledCard = styled.div`
	background-color: #aba8b5;
	border: 3px solid #645f72;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`;

const StyledNames = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
`;

const StyledUsername = styled.h3`
	font-size: 0.9em;
`;

const StyledImg = styled.img`
	width: 100%;
	border-radius: 50%;
	border: 3px solid #362b52;
	filter: ${({ active }) => (active ? 'none' : 'grayscale(100%)')};
`;

const StyledButton = styled.button`
	background-color: #362b52;
	color: #fff;
	border: none;
	padding: 10px 27px;
	border-radius: 25px;
	font-size: 0.9rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const SytledActive = styled.h3`
	color: darkgreen;
	font-size: 0.8em;
`;

const SytledInactive = styled.h3`
	color: darkred;
	font-size: 0.8em;
`;

export {
	StyledButton,
	StyledCard,
	StyledCardContainer,
	StyledImg,
	StyledNames,
	StyledUsername,
	SytledActive,
	SytledInactive
};
