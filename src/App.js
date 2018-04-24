import React from "react";
import Config from "./config";
import Title from "./components/Title";
import GallerySection from "./components/GallerySection";
import FeatureList from "./components/FeatureList";
import Map from "./components/Map";
import Details from "./components/Details";
import "./App.css";
import ReactPlayer from "react-player";

const App = () => {
  return (
    <div className="App">
      <Title address={Config.address} city={Config.city} state={Config.state} />
      <GallerySection images={Config.images} />
      <div style={{ paddingTop: "20px" }}>
        <h2>Property Film</h2>
        {/*https://www.npmjs.com/package/react-player*/}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JuYIOGxG87Q"
          controls
          width="100%"
          style={{
            height: "360px",
            margin: "auto"
          }}
        />
      </div>
      <Details details={Config.details} />
      {/*<FeatureList features={Config.features} />*/}

      <div style={{ paddingTop: "20px" }}>
        <h2>On the Map</h2>
        <Map center={Config.center} zoom={Config.zoom} />
      </div>
    </div>
  );
};

export default App;
