import React from 'react';
import styled from 'styled-components';
import * as styles from '../styles';

import Dungeon from './dungeon';
import { dungeonData } from '../data';

const CharacterData = props => {
	return (
		<CharacterDataContainer index={props.index}>
			<CharacterClass
				characterClass={props.class}
				classColours={styles.classColors}
			>
				{props.name}
			</CharacterClass>
			<div>{props.mythic_plus_scores_by_season[0].scores.all}</div>
			<HighestWeeklyDungeon>
				{ props.mythic_plus_weekly_highest_level_runs[0] ?
					<Dungeon
						dungeon={props.mythic_plus_weekly_highest_level_runs[0]}
						name={props.mythic_plus_weekly_highest_level_runs[0].short_name}
					/> : '--'
				}
			</HighestWeeklyDungeon>
			<DungeonsContainer>
				{dungeonData.map(dungeon => (
					<Dungeon
						key={dungeon.name}
            name={dungeon.name}
						dungeon={props.mythic_plus_best_runs.filter(
							e => e.short_name === dungeon.name
						)}
					/>
				))}
			</DungeonsContainer>
		</CharacterDataContainer>
	);
};

export default CharacterData;

const CharacterDataContainer = styled.div`
	border: 1px solid black;
	height: 5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.3rem;
	width: 90%;
	background-color: ${props => (props.index % 2 === 0 ? '#353535' : '#2b2b2b')};
	padding: 0 1rem;
	text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
`;

const CharacterClass = styled.div`
	color: ${props => props.classColours[props.characterClass]};
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8rem;
	font-size: 1.3rem;
`;

const DungeonsContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const HighestWeeklyDungeon = styled.div`
width: 48px;
text-align: center;
`