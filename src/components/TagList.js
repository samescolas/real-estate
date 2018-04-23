import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import 'antd/lib/tag/style/css';

const TagList = ({ tags }) => {

	const Container = styled.div`
		flex: 1;
	`;
	const SectionHeader = styled.h3`
		font-weight: bold;
		font-size: 2vmin;
		font-family: 'Raleway', sans-serif;
		padding-top: 2vh;
	`;

	const renderTags = () => tags.map(c => <Tag>{c}</Tag>);

	return (
		<Container>
			<SectionHeader>Tags</SectionHeader>
			{ renderTags() }
		</Container>
	);
};

export default TagList;
