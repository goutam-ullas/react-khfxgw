/* global document */
import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ"; // Set your mapbox token here

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 17.3755,
        longitude: 78.4735,
        zoom: 19,
        pitch: 60
      }
    };
  }

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/nnikita/ckd7n4m5b04e31ip8ai5a1xfj"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {this._renderPopup()}
      </MapGL>
    );
  }
}

document.body.style.margin = 0;
render(<Root />, document.body.appendChild(document.createElement("div")));
