import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CharacterData from './characterData';
import { getCharacterData } from '../state/actions/characters';

const CharactersData = ({
	characters: { isFetching, characterList, characterData },
	getCharacterData
}) => {
	const handleClick = () => {
		characterList.forEach(character => {
			if (!characterData.some(char => char.name === character.name)) {
				getCharacterData(character.name, character.server, character.region);
			}
		});
	};
	return (
		<CharactersDataContainer>
			<ButtonContainer>
				<button onClick={() => handleClick()}>GO</button>
			</ButtonContainer>
			<DataContainer>
				{characterData
					? characterData.map((character, index) => (
							<CharacterData
								key={character.name}
								{...character}
								index={index}
							/>
					  ))
					: 'There are no characters to display.'}
			</DataContainer>
		</CharactersDataContainer>
	);
};

export default connect(state => state, { getCharacterData })(CharactersData);

const CharactersDataContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: row;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	button {
		background-color: #3bca8b;
		border: none;
		color: #353535;
		padding: 1.5rem;
		border-radius: 50%;
		margin: 0 1rem;

		&:focus {
			outline: none;
		}

		&:hover {
			cursor: pointer;
		}
	}
`;

const DataContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
