import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap'
import './Search.css'

class Search extends Component {
  render() {
    const { onToggleOpen, onInputChanged, places } = this.props;

    this.renderPlaces = place => {
      return (<ListGroupItem className={ 'nav-option hover-option' } cursor={ 'pointer' } key={ place.id } onClick={ () => onToggleOpen(place.id, true) }>{ place.name }</ListGroupItem>)
    }

    this.onChange = event => {
      onInputChanged(event.target.value.trim())
    }

    return (
      <div>
        <br/>
        <Form>
          <FormGroup>
            <Label>Input Place</Label>
            <Input onChange = { this.onChange.bind(this) }/>
          </FormGroup>
        </Form>
        <ListGroup>
          { places.map(this.renderPlaces) }
        </ListGroup>
    </div>
    );
  }
}

export default Search;
