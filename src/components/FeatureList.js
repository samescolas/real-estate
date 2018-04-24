import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import 'antd/lib/list/style/css';

const FeatureList = ({ features }) => {
	const Container = styled.div`
		font-family: 'Raleway', sans-serif;
		margin-top: 16vh;
		margin-left: 5%;
		width: 90%;
	`;
	const SectionHeader = styled.h3`
		font-size: 5vmin;
		font-family: 'Allura', sans-serif;
		text-shadow: 1px 0 1px #333;
	`;

	return (
		<Container>
			<SectionHeader>Features</SectionHeader>
			<List
				style={{ textAlign: 'left' }}
				itemLayout="horizontal"
				dataSource={features}
				renderItem={item => (
					<List.Item>
						<List.Item.Meta
							title={item}
						/>
					</List.Item>
				)}
			/>
		</Container>
	);
};

export default FeatureList;
