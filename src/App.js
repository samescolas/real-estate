import React, { Component } from 'react';
import styled from 'styled-components';

import Config from './config';

import Title from './components/Title';
import Map from './components/Map';

import GallerySection from './components/GallerySection';

//import { Carousel, DatePicker } from 'antd';
//import 'antd/lib/carousel/style/css';        // for css
//import 'antd/lib/date-picker/style/css';        // for css

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
				<Title address={Config.address} city={Config.city} state={Config.state} />
				<GallerySection images={Config.images} features={Config.features} />
				<Map />
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
