/*eslint-disable no-undef*/

import React from 'react'
import {compose} from 'recompose'
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps'

this.renderMap = row => {
  return (<Marker position={row.center} key={row.id}/>)
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