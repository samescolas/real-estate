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
			height: 40px;
			width: auto;
			&:hover {
				height: 45px;
				width: auto;
				cursor: pointer;
				transition: all .4s ease-out;
			}
		`;

		const renderCarouselItems = () => {
			return images.map(i => <div key={i.id}><Image className="carousel-image" id={i.id} alt={i.categories[0]} key={i.id} src={i.path} /></div>);
		}

		const renderCarouselThumbnails = (dots) => {
			return <ul>{images.map((img, ix) => {
				return (
					<span key={img.id} id={img.id} onClick={(e) => onChange(images.findIndex(i => i.id == e.target.id))}>
						<Thumbnail id={img.id} alt={img.categories[0]} src={img.path} />
					</span>
				);
			})}</ul>;
		}

		const renderCarouselThumbnails1 = () => {
			return <ul>{images.map(i => {
					<div key={i.id} id={i.id} onClick={(e) => onChange(images.indexOf(e.target.id))}>
						<Thumbnail alt={i.categories[0]} src={i.path} />
					</div>
			})}</ul>
		}

		return (
			<Container>
				<Carousel
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
