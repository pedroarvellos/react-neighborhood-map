/*eslint-disable no-undef*/
import React from "react";
import { Form, FormGroup, Input, Nav, NavItem } from "reactstrap";
import {compose, lifecycle, withProps} from 'recompose'
import SearchBox from 'react-google-maps/lib/components/places/SearchBox'
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps'

const NavComponent = compose(
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
  <div>
    <Nav vertical class = "nav-bar-location">
      <NavItem>
        <Form>
          <FormGroup>
            {/* <Input type="text" name="address or place" id="address-location" placeholder="Write an address or a place" /> */}
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
          </FormGroup>
        </Form>
      </NavItem>
    </Nav>
  </div>
)

export default NavComponent;
