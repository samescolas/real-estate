import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel, Icon } from 'antd';
import 'antd/lib/carousel/style/css';
import 'antd/lib/icon/style/css';

class Gallery extends Component {

	render() {
		const { images, onCarouselChange, activeImage } = this.props;
		const Container = styled.div`
			width: 80%;
			height: 80vh;
			margin-top: 10vh;
			position: relative;
		`;
		const ArrowContainer = styled.div`
			position: absolute;
			top: 0;
			left: 0;
			width: 80%;
			height: 100%;
			margin-left: 10%; 
			z-index: 3;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		`;
		const Arrow = styled.span`
			font-size: 4vmin;
			color: rgba(42, 17, 13, 0.7);
			&:hover {
				cursor: pointer;
				color: rgba(42, 17, 13, 1);
				font-size: 4.2vmin;
				transition: all 0.5s;
			};
		`

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
					<span key={img.id} id={img.id} onClick={(e) => { this.refs.carousel.goTo(images.findIndex(i=> i.id==e.target.id)); }}>
						{ix === activeImage ?
							<ActiveThumbnail id={img.id} alt={img.categories[0]} src={img.path} /> :
							<Thumbnail id={img.id} alt={img.categories[0]} src={img.path} />
						}
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
				<ArrowContainer>
					<Arrow onClick={() => this.refs.carousel.previous()}><Icon type="double-left" /></Arrow>
					<Arrow onClick={() => this.refs.carousel.next()}><Icon type="double-right" /></Arrow>
				</ArrowContainer>
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
