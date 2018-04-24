import React from 'react';
import styled from 'styled-components';

const Details = ({ details }) => {
	const Container = styled.div`
		width: 100%;
		margin-top: 10vh;
		padding-top: 2%;
	`;
	const SectionHeader = styled.h2`
		text-align: center;
		font-size: 5vmin;
		font-family: 'Allura', sans-seif;
		text-shadow: 1px 0 1px #333;
	`;
	const DetailContainer = styled.p`
		text-align: left;
		width: 80%;
		margin-left: 10%;
		padding-top: 1%;
		font-size: 2.2vmin;
		font-family: 'Raleway', sans-seif;
	`;
	const renderDetails = () => {
		return details.map((d, i) => <DetailContainer key={i}>{d}</DetailContainer>);
	};

	return (
		<Container>
			<SectionHeader>Details</SectionHeader>
			{ renderDetails() }
		</Container>
	);
};

export default Details;
