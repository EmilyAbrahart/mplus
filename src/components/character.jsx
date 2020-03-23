import React from 'react';
import styled from 'styled-components';

const Character = ({ name, server, region }) => {
	return (
		<CharacterContainer>
			<div>{name.toUpperCase()}</div>
			<div className="span">
				{server}, {region}
			</div>
		</CharacterContainer>
	);
};

export default Character;

const CharacterContainer = styled.div`
	font-size: 0.8rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid #3bca8b;
	background-color: #353535;
	padding: 0.3rem 0.5rem;
	margin: 0.3rem 0;
	box-sizing: border-box;

	.span {
		padding: 0.5rem;
		font-weight: lighter;
	}
`;
