import React, { Component } from 'react';
import Map from './Map/Map.jsx'
import Search from './Search/Search.jsx'
import escapeRegExp from "escape-string-regexp";
import { Col } from 'reactstrap'

class App extends Component {
  state = {
    center: {
      lat: -22.229564362613292,
      lng: -45.931476952386525
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
        id: '5064bf01498ee7dbb93160af'
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
    ],

    placesFiltered: [],

    placeToShow:[],

    isOpen: false
  }

  componentDidMount(){
    this.setState(state => ({
      placesFiltered: state.places
    }))
  }

  onInputChanged = (input) => {
    if(input) {
      const match = new RegExp(escapeRegExp(input), "i");

      this.setState(state => ({
        placesFiltered: state.places.filter(place => {
          return match.test(place.name)
        })
      }))
    } else {
      this.setState({placesFiltered: this.state.places})
    }
  }

  onToggleOpen = (placeToShow, isOpen) => {
    this.setState({ placeToShow, isOpen });
  }

  render() {
    const { placesFiltered, placeToShow, isOpen, center} = this.state;

    return (
      <div className="App">
          <Col md={ 3 }>
            <Search
              places = { placesFiltered }
              onInputChanged = { (input) => this.onInputChanged(input) }
              onToggleOpen={ (placeToShow, isOpen) => this.onToggleOpen(placeToShow, isOpen) }
            />
          </Col>
          <Col md={ 9 }>
            <Map
              places = { placesFiltered }
              placeToShow={ placeToShow }
              isOpen={ isOpen }
              center={ center }
              onToggleOpen={ (placeToShow, isOpen) => this.onToggleOpen(placeToShow, isOpen) }
              containerElement={ <div style={{ height: `67em` }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
              loadingElement={ <div style={ { height: `100%` } }></div> }
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&libraries=places,geometry,drawing'
            />
          </Col>
      </div>
    );
  }
}

export default App;
