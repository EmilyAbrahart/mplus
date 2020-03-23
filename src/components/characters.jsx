import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Character from './character';
import CharacterForm from './characterForm';

const Characters = ({ characters: { characterList } }) => {
	return (
		<CharactersContainer>
			<CharacterDataContainer>
				{characterList.length ? (
					characterList.map(character => (
						<Character
							key={character.name}
							name={character.name}
							region={character.region}
							server={character.server}
						/>
					))
				) : (
					<div>You have no listed characters</div>
				)}
			</CharacterDataContainer>

			<FormContainer>
				<CharacterForm />
			</FormContainer>
		</CharactersContainer>
	);
};

export default connect(state => state)(Characters);

const CharactersContainer = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	position: relative;
	box-sizing: border-box;
`;

const CharacterDataContainer = styled.div`
	width: 100%;
`;

const FormContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
