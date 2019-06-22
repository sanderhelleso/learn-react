import React, { useState } from 'react';
import PersonCard from './PersonCard';

import styled from 'styled-components';

const myFriendsList = [
	{
		name: 'Eivind',
		age: 22
	},
	{
		name: 'Sara',
		age: 15
	},
	{
		name: 'Markus',
		age: 40
	}
];

const PersonsList = ({ listType }) => {
	const [ sortByAsc, setSortByAsc ] = useState(true);
	const [ friends, setFriends ] = useState(myFriendsList);

	const renderFriedsList = () => {
		return friends
			.sort((a, b) => {
				if (sortByAsc) {
					return a.age - b.age;
				} else {
					return b.age - a.age;
				}
			})
			.map(({ name, age }) => {
				return <PersonCard name={name} age={age} />;
			});
	};

	const changeSortOrder = () => {
		setSortByAsc(!sortByAsc);
	};

	return (
		<StyledDiv>
			<h2>{listType}</h2>
			<button onClick={changeSortOrder}>Sort by age {sortByAsc ? 'dsc' : 'asc'}</button>
			{renderFriedsList()}
		</StyledDiv>
	);
};

export default PersonsList;

const StyledDiv = styled.div`
	display: inline-block;
	margin-left: 4rem;
	padding: 2rem;
`;
