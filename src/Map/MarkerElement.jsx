import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Alert } from 'reactstrap'
import { getElementInfo } from './../Utils/FourSquareDAO'
import IconClicked from '../Img/maps-and-flags-blue.svg'
import IconNotClicked from '../Img/maps-and-flags-red.svg'

class MarkerElement extends Component {
  state = {
    placeAdditionalDetails: [],
    error: false
  }

  componentDidMount(){
    getElementInfo(this.props.row.id)
    .then(placeAdditionalDetails => {
      if(placeAdditionalDetails.response.venue !== undefined) {
        this.setState({ placeAdditionalDetails:  placeAdditionalDetails.response.venue})
      } else {
        this.setState({error: true})
        console.log(placeAdditionalDetails.meta.errorDetail)
      }
    })
    .catch(err => {
      this.setState({error: true})
      console.log(err);
    })
  }

  render() {
    const { placeAdditionalDetails } = this.state;
    const { row, onToggleOpen, placeToShow, isOpen, animation } = this.props;

    return (
      <Marker
        animation = { animation }
        position={ row.center }
        id={ row.id }
        onClick={() => onToggleOpen(row.id, true)}
        icon={ row.id === placeToShow  && isOpen ? { url: IconClicked} : { url: IconNotClicked} }>
          {
            row.id === placeToShow  && isOpen &&
            <Row>
              <InfoWindow onClick={() => onToggleOpen(row.id, false)}>
                {
                  !this.state.error ?
                    <CardBody>
                        <Col md={6}>
                          <CardTitle>
                            {
                              row  !== undefined &&
                              row.name
                            }
                          </CardTitle>
                          {
                            placeAdditionalDetails !== undefined &&
                            <div>
                              <CardSubtitle>Rating:
                                {' ' +
                                  placeAdditionalDetails.rating !== undefined &&
                                    placeAdditionalDetails.rating
                                }
                              </CardSubtitle>
                              <CardText>
                                {
                                  placeAdditionalDetails.location !== undefined &&
                                  placeAdditionalDetails.location.address ?  placeAdditionalDetails.location.address : 'Address not found'
                                }
                              </CardText>
                            </div>
                          }
                        </Col>
                        <Col md={6}>
                        {
                          placeAdditionalDetails !== undefined &&
                          placeAdditionalDetails.bestPhoto !== undefined &&
                          <div>
                            <img src={`${placeAdditionalDetails.bestPhoto.prefix}200x133${placeAdditionalDetails.bestPhoto.suffix}`} alt={ `${this.props.row.name}`}/>
                          </div>
                        }
                        </Col>
                    </CardBody>
                  :
                    <CardBody>
                      <CardTitle>
                        {
                          row  !== undefined &&
                          row.name
                        }
                      </CardTitle>

                      <div>Unfortunately it wasn't possible to get the info! :(</div>
                    </CardBody>
                }
              </InfoWindow>
            </Row>
          }
      </Marker>
    );
  }
}

export default MarkerElement;
