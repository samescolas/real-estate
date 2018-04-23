import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Map = ({ zoom, center }) => {
	const Container = styled.div`
		height: 80vh;
		width: 100%;
		margin-top: 2%;
	`;

	return (
		<Container>
			<GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
		</Container>
	);
};

export default Map;
