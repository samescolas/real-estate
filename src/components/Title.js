import React from 'react';
import styled from 'styled-components';

const Title = ({ address, city, state }) => {
	const Container = styled.div`
		height: 10vh;
		width: 100%;
		background-color: #fafafa;
		position: fixed;
		top: 0;
		left: 0;
		font-family: 'Raleway', sans-serif;
		font-size: 1.8vmin;
		color: #2e2e2e;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		z-index: 2;
		box-shadow: 0px 0px 2px #333;
	`;
	const Address = styled.h1`
		justify-self: flex-start;
		flex: 3;
		text-shadow: 1px 0 1px #333;
		font-family: 'Allura', sans-serif;
		font-size: 3.4vmin;
	`;
	const City = styled.h3`
		display: inline;
	`;
	const State = styled.h3`
		display: inline;
	`;

	return (
		<Container>
			<Address>{address}</Address>
			<div style={{ paddingRight: '40px' }}>
				<City>{city}, </City><State>{state}</State>
			</div>
		</Container>
	);
};

export default Title;
