import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Media } from 'reactstrap'
import { getElementInfo } from './../Utils/FourSquareDAO'

class MarkerElement extends Component {
  state = {
    placeAdditionalDetails: []
  }

  componentDidMount(){
    getElementInfo(this.props.row.id)
    .then(placeAdditionalDetails => {
      this.setState({ placeAdditionalDetails })
    })
  }

  render() {
    const { placeAdditionalDetails } = this.state;
    const { row, onToggleOpen, placeToShow, isOpen } = this.props;
    return (
      <Marker position={ row.center } key={ row.id } id={ row.id } onClick={() => onToggleOpen(row.id, true)}>
          {
            row.id === placeToShow  && isOpen &&
            <Row>
              <InfoWindow>
                    <CardBody key={ row.id }>
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
                                  placeAdditionalDetails.location.address || 'Address not found'
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
                            <img src={`${placeAdditionalDetails.bestPhoto.prefix}200x133${placeAdditionalDetails.bestPhoto.suffix}`} alt={ `${this.props.row.name} Image`}/>
                          </div>
                        }
                        </Col>
                    </CardBody>
              </InfoWindow>
            </Row>
          }
      </Marker>
    );
  }
}

export default MarkerElement;
