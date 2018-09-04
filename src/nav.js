/*eslint-disable no-undef*/
import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap'
import Sidebar from 'react-bootstrap-sidebar'

class NavComponent extends Component {
  updateModal = isVisible => {
    this.state.isVisible = isVisible;
    this.forceUpdate();
  }

  render() {
    return(
      <div>
        <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
        <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
          <Nav>
            <NavItem href="#">Link 1</NavItem>
            <NavItem href="#">Link 2</NavItem>
            <NavItem href="#">Link 3</NavItem>
            <NavItem href="#">Link 4</NavItem>
          </Nav>
        </Sidebar>
      </div>
    )
  }
}
export default NavComponent;