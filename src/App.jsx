import React, { Component } from 'react';
import Map from './Map.jsx'
import Search from './Search.jsx'
import { Col, Row } from 'reactstrap'

class App extends Component {
  render() {
    this.state = {
      center: {
        lat: -22.2271,
        lng: -45.9394
      },

      places: [
        {
          name: 'Uyrapuru',
          center: {
            lat: -22.232098353598452,
            lng: -45.93494279635826
          },
          id: '4e28c898814db22aa773a0dd'
        },
        {
          name: 'Maracujá com Manga',
          center: {
            lat: -22.23303623349676,
            lng: -45.9351163453684
          },
          id: '4e8ce18db8f711fd9749a92b'
        }
      ]
    }

    this.getVenues = () => {
      fetch('https://api.foursquare.com/v2/venues/explore?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
      .then(function() {
          // Code for handling API response
      })
      .catch(function() {
          // Code for handling errors
      });
    }

    return (
      <div className="App">
          <Col md={3}>
            <Search></Search>
          </Col>
          <Col md={9}>
            <Map
              places = {this.state.places}
              center={this.state.center}
              containerElement={<div style={{ height: `44em` }} />}
              mapElement={<div style={{ height: `100%`, width:`100%` }}></div>}
              loadingElement={<div style={{ height: `100%` }}></div>}
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&callback=initMap&libraries=places,geometry,drawing'
            />
          </Col>
      </div>
    );
  }
}

export default App;
