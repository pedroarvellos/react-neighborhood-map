import React from 'react'
import {compose} from 'recompose'
import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap'

this.renderPlaces = place => {
  return (<ListGroupItem>{place.name}</ListGroupItem>)
}

const Search = compose((props) =>
  <div>
    <br/>
    <Form>
      <FormGroup>
        <Label>Input Place</Label>
        <Input />
      </FormGroup>
    </Form>
    <ListGroup>
      {props.places.map(this.renderPlaces)}
    </ListGroup>
  </div>
);

export default Search;
