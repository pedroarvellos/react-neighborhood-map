/*eslint-disable no-undef*/

import React from 'react'
import { compose } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'

const Map = compose(withScriptjs, withGoogleMap)((props) =>
  <GoogleMap
    defaultZoom={16}
    center={props.center}
  >
    {props.places.map(row => {
      return (
        <Marker position={row.center} key={row.id}>
          {/* {isOpen && placeToShow.id === row.id && <InfoWindow onCloseClick={props.onToggleOpen}> <p>{row.name}</p></InfoWindow>} */}
          <InfoWindow>
            <div>
              Hello!
            </div>
          </InfoWindow>}
        </Marker>
      )
    })}
  </GoogleMap>
);

export default Map;