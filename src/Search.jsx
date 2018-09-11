import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap'

class Search extends Component {
  render() {
    this.renderPlaces = place => {
      return (<ListGroupItem>{place.name}</ListGroupItem>)
    }

    this.onChange = event => {
      this.props.onInputChanged(event.target.value.trim())
    }

    return (
      <div>
        <br/>
        <Form>
          <FormGroup>
            <Label>Input Place</Label>
            <Input onChange = {this.onChange.bind(this)}/>
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
