/*eslint-disable no-undef*/

/* I need to comment it so the react-map does not break my lint when something is undefined.
For example, "new google.map.LatLngBounds()" has not been declared in my scope,
if I don't comment it, it will be said it wasn't declared, interfiring in my lint.*/

import React from 'react'
import {compose, lifecycle, withProps} from 'recompose'
import SearchBox from 'react-google-maps/lib/components/places/SearchBox'
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps'

// Compose will agregate N functions to the component.
const mapWithSearchBox = compose(
  // Default props which can be overwritten as this component is called.
  withProps({
    containerElement:<div style={{height: '100%'}}/>,
    mapElement:<div style={{height: `600px`}}/>,
    loadingElement:<div style={{height: '100%'}}/>,
    googleMapURL:'https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&libraries=places,geometry,drawing'
  }),

  lifecycle({
    componentDidMount(){
      const refs = {}

      // Some methods are declared.
      this.setState({
        bounds: null,

        mapMounted: ref => {
          refs.map = ref
        },

        center: {
          lat: 41.9,
          lng: -87.624
        },

        onBoundsChange: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          })
        },

        /* Search box functions */
        // To know when search box and map were mounted.
        searchBoxMounted: ref => {
          refs.searchBox = ref
          debugger
        },

        // Main function to change where the map center is, where the marker is.
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces()
          const bounds = new google.maps.LatLngBounds()

          const nextPlaces = places.map(place => {
            return {position: place.geometry.location}
          });

          this.setState({
            center: nextPlaces[0].position
          })
        }
      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={9}
    ref={props.mapMounted}
    center={props.center}
    >
    <SearchBox
      ref={props.searchBoxMounted}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
      >
      <input placeholder = "Write your address"
        style={{
          height: `30px`,
          width: `230px`,
          margin: `15px`
        }}/>
    </SearchBox>
    <Marker position={props.center}/>
  </GoogleMap>
)
export default mapWithSearchBox;