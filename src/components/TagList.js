import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import 'antd/lib/tag/style/css';

/* 
	activeTags -- the list of tags belonging to the currently shown image.
	tags -- unique list of all tags
*/
const TagList = ({ tags, activeTags, selectedTags, selectTag, unselectTag }) => {

	const Container = styled.div`
		flex: 1;
	`;
	const SectionHeader = styled.h3`
		font-weight: bold;
		font-size: 2vmin;
		font-family: 'Raleway', sans-serif;
		padding-top: 2vh;
	`;
	const onClick = (category) => {
		console.log("CLICKED ON ", category, "!");
		if (category === 'All') {
			/* If All is already selected */
			if (selectedTags.includes('All')) {
				console.log("Unselecting 'All'...");
				unselectTag('All');
			/* User selected 'All', which was not already active. */
			} else {
				console.log("Selecting 'All'...");
				selectTag('All');
			}
		/* If category is already selected, unselect it. */
		} else if(selectedTags.includes(category)) {
			console.log("Unselecting ", category, "...");
			unselectTag(category);
		/* Otherwise select category. */
		} else {
			console.log("Selecting ", category, "...");
			selectTag(category);
		}
	};
	const getTagColor = (tag) => {
		let active = activeTags.includes(tag);
		let selected = selectedTags.includes(tag);

		if (selected && active) {
			return 'green';
		} else if (selected) {
			return 'geekblue';
		} else if (active) {
			return 'gold';
		} else {
			return '';
		}
	};

	const renderTags = () => {
		return ['All', ...tags].map(category => {
			return (
				<Tag
					id={category}
					key={category}
					onClick={(e) => onClick(e.target.id)}
					color={getTagColor(category)}
				>
					{category}
				</Tag>
			);
		});
	};

	return (
		<Container>
			<SectionHeader>Tags</SectionHeader>
			{ renderTags() }
		</Container>
	);
};

export default TagList;
