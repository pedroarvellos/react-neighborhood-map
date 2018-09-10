/*eslint-disable no-undef*/

import React from 'react'
import { compose, withStateHandlers, withState, withHandlers } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

const Map = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => (marker) => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    center={props.center}
  >

    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.places.map(row => {
        return (
          <Marker position={row.center} onClick={props.onToggleOpen} key={row.id}>
            {/* {isOpen && placeToShow.id === row.id && <InfoWindow onCloseClick={props.onToggleOpen}> <p>{row.name}</p></InfoWindow>} */}
          </Marker>
        )
      })}

    </MarkerClusterer>
  </GoogleMap>
);

export default Map;