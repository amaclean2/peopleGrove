import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

// renders the nav-bar
// if the userId for the app is not entered, then only the Login link will be displayed

class Navigation extends Component {

  showNav() {
    if(this.props.userId === 0) {
      return (
        <Nav bsStyle="tabs">
          <NavItem href='#/login'>Login</NavItem>
        </Nav>
      )
    }
    else {
      return (
        <Nav bsStyle="tabs">
          <NavItem href="#/login">Login</NavItem>
          <NavItem href="#/addActivity">Add Activity</NavItem>
          <NavItem href="#/calendar">Calendar</NavItem>
          <NavItem href="#/users">Users</NavItem>
        </Nav>
      )
    }
  }

  render() {
    let nav = this.showNav()
    return (
      <div>
       {nav}
      </div>
    )
  }
}

export default Navigation
