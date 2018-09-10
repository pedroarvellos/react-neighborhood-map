import React, { Component } from 'react';
import Map from './Map.jsx'
import Search from './Search.jsx'
import { Col } from 'reactstrap'

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
        },
        {
          name: 'Don Panetteria',
          center: {
            lat: -22.225146220920166,
            lng: -45.93891919408967
          },
          id: '5064bf01498ee7dbb93160afs'
        },
        {
          name: 'T-Max',
          center: {
            lat: -22.229564362613292,
            lng: -45.931476952386525
          },
          id: '564faa64498edada318a26cd'
        },
        {
          name: 'Divina Maria Café & Cultura',
          center: {
            lat: -22.23347056429007,
            lng: -45.93313954621554
          },
          id: '4e73a604d16472c037433ca3'
        },
        {
          name: 'República Bar',
          center: {
            lat: -22.233756905893188,
            lng: -45.93329260230888
          },
          id: '4cb3f7cbb4b0a35de71364ce'
        }
      ]
    }

    return (
      <div className="App">
          <Col md={3}>
            <Search places = {this.state.places}></Search>
          </Col>
          <Col md={9}>
            <Map
              places = {this.state.places}
              center={this.state.center}
              containerElement={<div style={{ height: `44em` }} />}
              mapElement={<div style={{ height: `100%`, width:`100%` }}></div>}
              loadingElement={<div style={{ height: `100%` }}></div>}
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&libraries=places,geometry,drawing'
            />
          </Col>
      </div>
    );
  }
}

export default App;
