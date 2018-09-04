import React, { Component } from 'react';
import Map from './map'
import { Col, Row } from 'reactstrap'
import NavComponent from './nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          {/* <Col md={2}>
            <NavComponent></NavComponent>
          </Col> */}
          <Col md={12}>
            <Map
            // containerElement={<div style={{height: '100%'}}/>}
            // mapElement= {<div style={{height: `600px`}}/>}
            // loadingElement={<div style={{height: '100%'}}/>}
            // googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&callback=initMap&libraries=places,geometry,drawing'
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
