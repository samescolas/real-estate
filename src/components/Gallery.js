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
			onCarouselChange(images[ix].id, ix);
		}

		const Image = styled.img`
			height: 80vh;
			width: auto;
			margin: 0 auto;
		`;
		const Thumbnail = styled.img`
			width: 40px;
			height: auto;
			max-height: 45px;
			&:hover {
				width: 45px;
				height: auto;
				max-height: 50px;
				cursor: pointer;
				transition: all .4s ease-out;
			}
		`;
		const ActiveThumbnail = styled.img`
			width: 45px;
			height: auto;
			max-height: 45px;
			&:hover {
				cursor: pointer;
			};
		`

		const renderCarouselItems = () => {
			return images.map(i => <div key={i.id}><Image className="carousel-image" id={i.id} alt={i.categories[0]} key={i.id} src={i.path} /></div>);
		}

		const renderCarouselThumbnails = (dots) => {
			return <ul>{images.map((img, ix) => {
				return (
					<span key={img.id} id={img.id} onClick={(e) => { this.refs.carousel.goTo(images.findIndex(i=> i.id===e.target.id)); }}>
						{ix === activeImage ?
							<ActiveThumbnail id={img.id} alt={img.categories[0]} src={img.path} /> :
							<Thumbnail id={img.id} alt={img.categories[0]} src={img.path} />
						}
					</span>
				);
			})}</ul>;
		}

		return (
			<Container>
				<Carousel
					ref="carousel"
					initialSlide={activeImage}
					afterChange={onChange}
					autoplay
					draggable
					infinite={false}
					appendDots={renderCarouselThumbnails}
				>
					{renderCarouselItems()}
				</Carousel>
			</Container>
		);
	};
}

export default Gallery;
