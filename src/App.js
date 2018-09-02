import React, { Component } from 'react';
import './App.css';
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
        containerElement={<div style={{height: '100%'}}/>}
        mapElement= {<div style={{height: `600px`}}/>}
        loadingElement={<div style={{height: '100%'}}/>}
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&callback=initMap&libraries=places,geometry,drawing'
        />
      </div>
    );
  }
}

export default App;
