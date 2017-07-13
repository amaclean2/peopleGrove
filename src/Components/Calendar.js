import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import CalendarRender from './CalendarRender';
import Months from './Months';

/*
  Calendar sets the information to display the month and sends the information to <CalendarRender />
  to display the information in a viewable calendar.

  state:
    weeks - an array of six weeks with all the appropriate days in order
    year - the year of the month to be viewed
    month - the month to be viewed

  functions:
    fillMonth(date) - defines all the dates to be shown on a particular month
    conponentWillMount() - calls fillMonth() before the component gets mounted
    getNext() & getPrevious() - render the next and the previous months when called
*/

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
        // renders the day of the week of the first of the month
        firstOfMonth = new Date(year, month, 1).getDay(),
        // renders the date of the last of the month
        lastOfMonth = new Date(year, month + 1, 0).getDate(),
        // renders the date of the last of the last month
        lastDayOfLastMonth = new Date(year, month, 0).getDate()

    let dayCount = 1,
        lastMonthDay = lastDayOfLastMonth - firstOfMonth + 1
    // fills the array, newWeeks with subarrays containing each day
    while(newWeeks.length < 6) {
      week = []
      let dayOfWeek = 0
      // fills the first subarray with the days from last month
      if (newWeeks.length === 0) {
        dayOfWeek = firstOfMonth;
        while(lastMonthDay <= lastDayOfLastMonth) {
          week.push(lastMonthDay)
          lastMonthDay++
        }
      }

      // fills each subarray with each date in the week
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
