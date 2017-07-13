import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import CalendarRender from './CalendarRender';
import Months from './Months';

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      weeks: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth()
    }
    this.fillMonth=this.fillMonth.bind(this)
    this.getPrevious=this.getPrevious.bind(this)
    this.getNext=this.getNext.bind(this)
  }

  fillMonth(date) {
    let week = [],
        newWeeks = [],
        month = date.getMonth(),
        year = date.getFullYear(),
        firstOfMonth = new Date(year, month, 1).getDay(),
        lastOfMonth = new Date(year, month + 1, 0).getDate(),
        lastDayOfLastMonth = new Date(year, month, 0).getDate()

    let dayCount = 1,
        lastMonthDay = lastDayOfLastMonth - firstOfMonth + 1
    while(newWeeks.length < 6) {
      week = []
      let dayOfWeek = 0
      if (newWeeks.length === 0) {
        dayOfWeek = firstOfMonth;
        while(lastMonthDay <= lastDayOfLastMonth) {
          week.push(lastMonthDay)
          lastMonthDay++
        }
      }
      while(dayOfWeek < 7) {
        if(dayCount > lastOfMonth)
          dayCount = 1
        week.push(dayCount)
        dayOfWeek++
        dayCount++
      }
      newWeeks.push(week)
    }
    this.setState({weeks: newWeeks})
  }

  componentWillMount() {
    this.fillMonth(new Date())
  }

  getPrevious() {
    let newMonth = this.state.month
    let newYear = this.state.year
    newMonth--
    if(newMonth === -1) {
      newMonth = 11
      newYear--
    }
    this.setState({month: newMonth, year: newYear})
    this.fillMonth(new Date(newYear, newMonth, 1))
  }

  getNext() {
    let newMonth = this.state.month
    let newYear = this.state.year
    newMonth++
    if(newMonth === 12) {
      newMonth = 0
      newYear++
    }
    this.setState({month: newMonth, year: newYear})
    this.fillMonth(new Date(newYear, newMonth, 1))
  }

  render() {
    return (
      <div className="wrapper fullWidth">
        <h3 className="dateHeading" >{Months[this.state.month]}, {this.state.year}</h3>
        <div className="buttonSpace">
        <Button onClick={this.getPrevious}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Button>
        <Button onClick={this.getNext}><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></Button>
        </div>
        <CalendarRender weeks={this.state.weeks} year={this.state.year} month={this.state.month} setDate={this.props.setDate}/>
      </div>
    )
  }
}

export default Calendar
