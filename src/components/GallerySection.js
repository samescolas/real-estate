import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from './Gallery';
import TagList from './TagList';
import FeatureList from './FeatureList';

class GallerySection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeImage: {
				id: 0,
				ix: 0,
			},
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

	filterImages = (tags) => {
		if (tags[0] === 'All') {
			return this.props.images;
		}
		return this.props.images.filter(img => {
			for (var i=0; i<tags.length; i++) {
				if (img.categories.includes(tags[i])) {
					return true;
				}
			}
			return false;
		});
	};

	selectTag = (tag) => {
		let newTags;
		if (tag === 'All') {
			newTags = ['All'];
		} else if (this.state.selectedTags[0] === 'All') {
			newTags = [tag];
		} else {
			newTags = [tag, ...this.state.selectedTags];
		}
		console.log("Set tags to ", newTags);
		let newImgs = this.filterImages(newTags);
		console.log("Set images to ", newImgs);
		this.setState({
			selectedTags: newTags,
			activeImage: { id: newImgs[0].id, ix: 0 },
			filteredImages: newImgs
		});
	};

	unselectTag = (tag) => {
		let newTags;
		if (this.state.selectedTags.length === 1) {
			newTags = ['All'];
		} else {
			let ix = this.state.selectedTags.indexOf(tag);
			newTags = [...this.state.selectedTags.slice(0, ix), ...this.state.selectedTags.slice(ix+1)];
		}
		let newImgs = this.filterImages(newTags);
		this.setState({
			selectedTags: newTags,
			activeImage: { id: newImgs[0].id, ix: 0 },
			filteredImages: newImgs
		});
	};

	onChange = (id, ix) => {
		this.setState({ activeImage: { id, ix }});
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
				<Gallery images={this.state.filteredImages} onCarouselChange={this.onChange} activeImage={this.state.activeImage.ix} />
				<Details>
					<TagList
						tags={this.state.tags}
						activeTags={images[this.state.activeImage.id].categories}
						selectedTags={this.state.selectedTags}
						selectTag={this.selectTag}
						unselectTag={this.unselectTag}
					/>
				</Details>
			</Container>
		);
	}
}

export default GallerySection;
