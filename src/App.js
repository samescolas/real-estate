import React from "react";

import Config from "./config";

import Title from "./components/Title";
import GallerySection from "./components/GallerySection";
import FeatureList from "./components/FeatureList";
import Map from "./components/Map";
import Details from "./components/Details";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Title address={Config.address} city={Config.city} state={Config.state} />
      <GallerySection images={Config.images} />
      <Details details={Config.details} />
      <FeatureList features={Config.features} />

      <div style={{ paddingTop: "20px" }}>
        <Map center={Config.center} zoom={Config.zoom} />
      </div>
    </div>
  );
};

export default App;
