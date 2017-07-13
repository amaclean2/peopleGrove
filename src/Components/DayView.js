import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Months from './Months';
import DayEvents from './DayEvents';

/*
  Shows the events for any given day

  state:
    day - the date to be rendered
    month - the month ot be rendered
    year - the year to be rendered

  functions:
    getNext() - renders the next day when called
    getPrevious() - renders the previous day when called
    goToAdd() - renders the <addActivity /> Component
    setDate() - sets the values in the state to the date passed in the props
    componentWillMount() - calls the setDate() function
*/

class DayView extends Component {
  constructor() {
    super()
    this.state = {
      day: null,
      month: null,
      year: null
    }
    this.getNext=this.getNext.bind(this)
    this.getPrevious=this.getPrevious.bind(this)
    this.setDate=this.setDate.bind(this)
  }

  getNext() {
    let newDay = this.state.day,
        newMonth = this.state.month,
        newYear = this.state.year
    newDay++
    if(newDay > new Date(this.state.year, (this.state.month + 1), 0).getDate()) {
      newDay = 1
      newMonth++
      if(newMonth > 12) {
        newMonth = 0
        newYear++
      }
    }
    this.setState({day: newDay, month: newMonth, year: newYear})
  }

  getPrevious() {
    let newDay = this.state.day,
        newMonth = this.state.month,
        newYear = this.state.year
    newDay--
    if(newDay < 1) {
      newDay = new Date(this.state.year, (this.state.month), 0).getDate()
      newMonth--
      if(newMonth < 1) {
        newMonth = 12
        newYear--
      }
    }
    this.setState({day: newDay, month: newMonth, year: newYear})
  }

  goToAdd() {
    window.location = "#/addActivity"
  }

  setDate() {
    const date = (this.props.date) ? this.props.date : new Date()
    this.setState({
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    })
  }

  componentWillMount() {
    this.setDate()
  }

  render() {
    return (
      <div className="wrapper smallWidth">
        <h3>{Months[this.state.month]} {this.state.day}, {this.state.year}</h3>
        <div className="buttonSpace">
          <Button onClick={this.getPrevious}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Button>
          <Button onClick={this.getNext}><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></Button>
        </div>
        <DayEvents day={new Date(this.state.year, this.state.month, this.state.day)} setActivity={this.props.setActivity} />
        <Button bsStyle="primary" onClick={this.goToAdd} >Add Activity</Button>
      </div>
    )
  }
}

export default DayView
