import React, { Component } from 'react';
import styled from 'styled-components';

import Config from './config';

import Title from './components/Title';
import Gallery from './components/Gallery';
import Map from './components/Map';
import TagList from './components/TagList';
import FeatureList from './components/FeatureList';

//import { Carousel, DatePicker } from 'antd';
//import 'antd/lib/carousel/style/css';        // for css
//import 'antd/lib/date-picker/style/css';        // for css

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
		const TopContainer = styled.div`
			width: 100%;
			height: 80vh;
			background-color: inidianred;
			display: flex;
			flex-direction: row;
		`;
    return (
      <div className="App">
				<Title address={Config.address} city={Config.city} state={Config.state} />
				<TopContainer>
					<Gallery />
					<FeatureList />
				</TopContainer>
				<Map />
				<TagList />
      </div>
    );
  }
}

export default App;

/* Saving example for later
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<div>
					<Carousel afterChange={this.onChange}>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
					</Carousel>
				</div>
				<div style={{ width: '25%' }}>
					<DatePicker />
				</div>
*/
