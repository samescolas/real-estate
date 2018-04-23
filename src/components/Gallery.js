import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css';

const Gallery = ({ images }) => {
	const Container = styled.div`
		height: 80vh;
		width: 80%;
		margin-top: 10vh;
	`;

	const renderCarouselItems = () => {
		return images.map(i => <img src={i.path} />);
	}

	return (
		<Container>
			<Carousel>
				{renderCarouselItems()}
			</Carousel>
		</Container>
	);
};

export default Gallery;
