/*eslint-disable no-undef*/

import React from 'react'
import {compose} from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

this.renderMap = row => {
  return (
    <div>
      <Marker position={row.center} key={row.id}/>
    </div>
  )
}

const Map = compose(withScriptjs, withGoogleMap)((props) =>
  <GoogleMap
    defaultZoom={16}
    center={props.center}
  >

    {props.places.map(this.renderMap)}
  </GoogleMap>
);

export default Map;