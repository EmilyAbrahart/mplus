import React from 'react';
import styled from 'styled-components';

import Heading from './heading';
import Characters from './characters';
import CharactersData from './charactersData';

const Home = () => {
	return (
		<HomeContainer>
			<Heading />
			<HeadingBlock />
			<MainContentContainer>
				<Characters />
				<CharactersData />
			</MainContentContainer>
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
	display: flex;
	padding: 2rem;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const MainContentContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HeadingBlock = styled.div`
width: 100%;
height: 3.5rem;
`
