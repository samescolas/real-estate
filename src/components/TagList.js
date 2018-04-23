import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import 'antd/lib/tag/style/css';

const TagList = ({ tags, activeTags }) => {

	const Container = styled.div`
		flex: 1;
	`;
	const SectionHeader = styled.h3`
		font-weight: bold;
		font-size: 2vmin;
		font-family: 'Raleway', sans-serif;
		padding-top: 2vh;
	`;
	const onClick = (i) => {
		console.log("CLICKED ON ", i, "!");
	};

	const renderTags = () => tags.map(c => <Tag id={c} key={c} onClick={(e) => onClick(e.target.id)} color={activeTags.includes(c) ? 'geekblue' : ''}>{c}</Tag>);

	return (
		<Container>
			<SectionHeader>Tags</SectionHeader>
			{ renderTags() }
		</Container>
	);
};

export default TagList;
