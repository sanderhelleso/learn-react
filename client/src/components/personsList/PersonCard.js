import React from 'react';
import styled from 'styled-components';

const PersonCard = ({ name, age }) => {
	return (
		<StyledDiv>
			<StyledHeading>{name}</StyledHeading>
			<StyledAge>Age: {age}</StyledAge>
		</StyledDiv>
	);
};

export default PersonCard;

const StyledDiv = styled.div`
	min-height: 150px;
	min-width: 300px;
	max-width: 300px;
	margin: 1rem 0;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	background-color: #eeeeee;
`;

const StyledHeading = styled.h5`
	font-weight: 800px;
	font-size: 1.25rem;
	margin-bottom: 2rem;
	margin-top: 0.5rem;
`;

const StyledAge = styled.p`
	font-size: 1rem;
	color: #757575;
`;
