import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import 'antd/lib/list/style/css';

const FeatureList = ({ features }) => {
	const Container = styled.div`
		font-family: 'Raleway', sans-serif;
	`;
	const SectionHeader = styled.h3`
		font-weight: bold;
		font-size: 2vmin;
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
