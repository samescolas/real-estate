import React from "react";
import Config from "./config";
import Title from "./components/Title";
import GallerySection from "./components/GallerySection";
import FeatureList from "./components/FeatureList";
import Map from "./components/Map";
import Details from "./components/Details";
import "./App.css";
import ReactPlayer from "react-player";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Analytics from "react-router-ga";
import { Helmet } from "react-helmet";

//google analytics

const Main = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Official 23 THORNRIDGE DR, THORNHILL, ON</title>
        <meta
          name="description"
          content="Luxury and Timeless Extraordinary Elegance On ~ Nearly 1 Acre Lot!! A True Masterpiece French Inspired Palace In The Prestigious Oakbank Pond & Thornhill Country Club Neighbourhood."
        />
      </Helmet>

      <Title address={Config.address} city={Config.city} state={Config.state} />
      <GallerySection images={Config.images} />

      <Details details={Config.details} />

      <div style={{ paddingTop: "70px" }} id="film">
        <h2>Property Film</h2>
        {/*https://www.npmjs.com/package/react-player*/}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=SGoxGXrcl6M"
          controls
          width="100%"
          style={{
            height: "360px",
            margin: "auto"
          }}
        />
      </div>

      {/*<FeatureList features={Config.features} />*/}

      <div style={{ paddingTop: "20px" }}>
        <h2>On the Map</h2>
        <Map center={Config.center} zoom={Config.zoom} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Analytics id="UA-85281823-2">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Analytics>
    </BrowserRouter>
  );
};

export default App;
