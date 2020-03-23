import React from 'react';
import styled from 'styled-components';

const Heading = () => {
	return (
		<HeadingContainer>
			<h1>
				MYTHIC <span>PLUS</span> PROFILE<span>.</span>
			</h1>
		</HeadingContainer>
	);
};

export default Heading;

const HeadingContainer = styled.div`
width: 100%;
position: absolute;
top: 0;
left: 0;
padding: 1rem 2rem;
box-sizing: border-box;

span {
  color: #3bca8b;
}
`