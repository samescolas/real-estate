import React, { Component } from 'react';
import styled from 'styled-components';

import Config from './config';

import Title from './components/Title';
import GallerySection from './components/GallerySection';
import Map from './components/Map';
import Details from './components/Details';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
				<Title address={Config.address} city={Config.city} state={Config.state} />
				<GallerySection images={Config.images} features={Config.features} />
				<Details details={Config.details} />
				<Map center={Config.center} zoom={Config.zoom} />
      </div>
    );
  }
}

export default App;
