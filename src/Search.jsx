import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap'

class Search extends Component {
  render() {
    // this.state = {
    //   getVenues: () => {
    //     fetch('https://api.foursquare.com/v2/venues/explore?client_id=RRVKO0FVTKJKIEO2IUJRUOWLH4SD2EW4DBPHH5WVGRCFUMEN&client_secret=AZTCXZOVMRP3GYNGXU4HFQUUWIUAZZVHYSF5PD0HCL5GNM4X&query=food&near=Sydney')
    //     .then(function(response) {
    //         console.log(response);
    //     })
    //     .catch(function(response) {
    //         console.log(response);
    //     })
    //   }
    // }

    this.renderPlaces = place => {
      return (<ListGroupItem>{place.name}</ListGroupItem>)
    }

    return (
      <div>
        <br/>
        <Form>
          <FormGroup>
            <Label>Input Place</Label>
            <Input />
          </FormGroup>
        </Form>
        <ListGroup>
          {this.props.places.map(this.renderPlaces)}
        </ListGroup>
    </div>
    );
  }
}

export default Search;
