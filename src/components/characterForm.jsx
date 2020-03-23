import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addCharacter } from '../state/actions/characters';

const CharacterForm = ({ addCharacter }) => {
	const [name, setName] = useState('');
	const [server, setServer] = useState('');
	const [region, setRegion] = useState('');

	const handleNameChange = event => {
		setName(event.target.value);
	};
	const handleServerChange = event => {
		setServer(event.target.value);
	};
	const handleRegionChange = event => {
		setRegion(event.target.value);
	};
	const handleSubmit = () => {
		const newCharacter = {
			name,
			server,
			region
		};
		addCharacter(newCharacter);
		setName('');
		setServer('');
		setRegion('');
	};

	return (
		<FormContainer>
			<form>
				<input
					type="text"
					name="name"
					placeholder="Character Name"
					onChange={handleNameChange}
					value={name}
				/>
				<input
					type="text"
					name="server"
					placeholder="Server"
					onChange={handleServerChange}
					value={server}
				/>
				<input
					type="text"
					name="region"
					placeholder="Region"
					onChange={handleRegionChange}
					value={region}
				/>
			</form>
			<button
				onClick={() => {
					handleSubmit();
				}}
			>
				Add
			</button>
		</FormContainer>
	);
};

export default connect(state => state, { addCharacter })(CharacterForm);

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;

		input {
			margin: 0.5rem;
			padding: 0.5rem;
			width: 100%;
			box-sizing: border-box;
		}
	}
`;
