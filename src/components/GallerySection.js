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
			selectedTags: ['All'],
			filteredImages: props.images,
			tags: props.images
				/* Map to list of arrays: [['a', 'b', 'c'], ['b', 'd'], [...]] */
				.map(i => i.categories)
				/* Combine arrays into one array: ['a', 'b', 'c', 'b', 'd'] */
				.reduce((i, acc) => [...acc, ...i])
				/* Sort array: ['a', 'b', 'b', 'c', 'd'] */
				.sort()
				/* Remove duplicates: ['a', 'b', 'c', 'd'] */
				.filter((v, i, a) => (i===0 || v!==a[i-1])),
		};
	}

	filterImages = () => {
		if (this.state.selectedTags[0] === 'All') {
			this.setState({ filteredImages: this.props.images });
		}
		this.setState({
			filteredImages: this.props.images.filter(img => {
				for (var i=0; i<this.state.selectedTags.length; i++) {
					if (img.categories.includes(this.state.selectedTags[i])) {
						return true;
					}
				}
				return false;
			})
		});
	};

	selectTag = (tag) => {
		if (tag === 'All') {
			this.setState({ selectedTags: ['All'], activeImage: 0 });
		} else if (this.state.selectedTags[0] === 'All') {
			this.setState({ selectedTags: [tag], activeImage: 0 });
		} else {
			this.setState({ selectedTags: [tag, ...this.state.selectedTags], activeImage: 0 });
		}
		setTimeout(this.filterImages, 500);
	};

	unselectTag = (tag) => {
		if (this.state.selectedTags.length === 1) {
			this.setState({ selectedTags: ['All'], activeImage: 0 });
		} else {
			let ix = this.state.selectedTags.indexOf(tag);

			if (ix >= 0) {
				this.setState({
					selectedTags: [...this.state.selectedTags.slice(0, ix), ...this.state.selectedTags.slice(ix+1)],
					activeImage: 0
				});
			}
		}
		setTimeout(this.filterImages, 500);
	};

	onChange = (ix, id) => {
		this.setState({ activeImage: ix });
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
				<Gallery images={this.state.filteredImages} onCarouselChange={this.onChange} activeImage={this.state.activeImage} />
				<Details>
					<TagList
						tags={this.state.tags}
						activeTags={images[this.state.filteredImages[this.state.activeImage].id].categories}
						selectedTags={this.state.selectedTags}
						selectTag={this.selectTag}
						unselectTag={this.unselectTag}
					/>
					<FeatureList features={features} />
				</Details>
			</Container>
		);
	}
}

export default GallerySection;
