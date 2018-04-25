import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const tempKey = "AIzaSyCARbwqVq47aEupX8ar238sT-Pd933_iB4";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     */
    googleMapURL: `https://dmaps.googleapis.com/maps/api/js?key=${tempKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, marginTop: `20px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  //https://github.com/google-map-react/google-map-react/blob/master/API.md
  <GoogleMap defaultZoom={props.zoom} defaultCenter={{ ...props.center }}>
    <Marker position={{ ...props.center }} />
  </GoogleMap>
));

export default MyMapComponent;
