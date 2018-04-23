import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from './Gallery';
import TagList from './TagList';
import FeatureList from './FeatureList';

class GallerySection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeImage: 0,
			tags: props.images.map(i => i.categories).reduce((i, acc) => [...acc, ...i]).sort().filter((v, i, a) => (i===0 || v!==a[i-1]))
		};
	}

	onChange = (activeImage) => {
		this.setState({ activeImage });
	}

	render() {
		const { images, features } = this.props;
		const Container = styled.div`
			width: 100%;
			height: 80vh;
			z-index: -2;
			display: flex;
			flex-direction: row;
			margin-top: 20px;
		`;
		const Details = styled.div`
			width: 18%;
			height: 80vh;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin: 10vh 2.5% 0 2.5%;
		`;

		return (
			<Container>
				<Gallery images={images} onCarouselChange={this.onChange} activeImage={this.state.activeImage} />
				<Details>
					<TagList tags={this.state.tags} activeTags={images[this.state.activeImage].categories} />
					<FeatureList features={features} />
				</Details>
			</Container>
		);
	}
}

export default GallerySection;
