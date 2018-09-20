import React, { Component } from 'react'
import { Label, Input, ListGroup, ListGroupItem } from 'reactstrap'
import './Search.css'

class Search extends Component {
  render() {
    const { onToggleOpen, onInputChanged, places } = this.props;

    this.renderPlaces = place => {
      return (<ListGroupItem tabindex={'0'} className={ 'nav-option hover-option' } cursor={ 'pointer' } key={ place.id } onClick={ () => onToggle(place.id, true) } onKeyPress={ () => onToggle(place.id, true) }>{ place.name }</ListGroupItem>)
    }

    this.onChange = event => {
      onInputChanged(event.target.value.trim())
    }

    return (
      <div>
        <br/>
        <Label>Input Place</Label>
        <Input onChange = { this.onChange.bind(this) }/>

        <ListGroup>
          { places.map(this.renderPlaces) }
        </ListGroup>
    </div>
    );
  }
}

export default Search;
