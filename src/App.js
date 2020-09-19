import * as React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ'; // Set your mapbox token here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >

       // {this._renderPopup()}

      </MapGL>
    );
  }
}

export default App;