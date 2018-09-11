import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

class MarkerElement extends Component {
  state = {
    placeAdditionalDetails: {
        location: 'R. Comendador José Garcia, 557, Centro, Pouso Alegre',
        rating: '8.3'
      }
  }

  // componentDidMount(){
  //   fetch(`https://api.foursquare.com/v2/venues/${this.props.row.id}?client_id=Z40CSEXQVVQLU13VVMJTKBDJQRGQWZLDLDT0N2K2CFA2UNHZ&client_secret=SXDCA1USG40QQXFGQ5XO1RELR45GVPJ1X4KGPBUDYUGBQLMN&v=20180910&locale=en`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState(state => ({
  //         placeAdditionalDetails: data.response.venue
  //       }))
  //       console.log(this.state.placeAdditionalDetails)
  //     })
  // }

  render() {
    return (
      <Marker position={this.props.row.center} key={this.props.row.id} id={this.props.row.id} onClick={() => this.props.onToggleOpen(this.props.row.id, true)}>
          {
            this.props.row.id === this.props.placeToShow  && this.props.isOpen &&
            <InfoWindow>
              <div>
                <CardBody>
                  <CardTitle>{this.props.row.name}</CardTitle>
                  <CardSubtitle>Rating: {this.state.placeAdditionalDetails.rating}</CardSubtitle>
                  <CardText>{this.state.placeAdditionalDetails.location}</CardText>
                </CardBody>
              </div>
            </InfoWindow>
          }
      </Marker>
    );
  }
}

export default MarkerElement;
