import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css';

class Gallery extends Component {

	render() {
		const { images, onCarouselChange, activeImage } = this.props;
		const Container = styled.div`
			width: 80%;
			height: 80vh;
			margin-top: 10vh;
		`;

		const onChange = (ix) => {
			onCarouselChange(ix, images[ix].id);
		}

		const Image = styled.img`
			height: 80vh;
			width: auto;
			margin: 0 auto;
		`;

		const renderCarouselItems = () => {
			return images.map(i => <div key={i.id}><Image className="carousel-image" id={i.id} alt={i.categories[0]} key={i.id} src={i.path} /></div>);
		}

		return (
			<Container>
				<Carousel
					initialSlide={activeImage}
					afterChange={onChange}
					autoplay
					draggable
					infinite={false}
				>
					{renderCarouselItems()}
				</Carousel>
			</Container>
		);
	};
}

export default Gallery;
