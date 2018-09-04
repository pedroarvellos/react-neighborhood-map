import React, { Component } from 'react';
import Map from './map'
import NavComponent from './nav'
import { Grid, Row, Col } from 'react-bootstrap'
import './search-style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid="true">
          <Row>
            <Col md={2}>
              <NavComponent></NavComponent>
            </Col>
            <Col md={8}>
              <Map
              // containerElement={<div style={{height: '100%'}}/>}
              // mapElement= {<div style={{height: `600px`}}/>}
              // loadingElement={<div style={{height: '100%'}}/>}
              // googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&callback=initMap&libraries=places,geometry,drawing'
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
