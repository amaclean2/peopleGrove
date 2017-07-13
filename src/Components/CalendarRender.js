import React, { Component } from 'react';
import Radium from 'radium';

import CalendarEvents from './CalendarEvents';

var medDays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
    //shortDays = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ]

class CalendarRenderer extends Component {

  showDayView(date) {
    this.props.setDate(date)
    window.location = "#/dayView"
  }

  getStyle() {
    return {
      today: { backgroundColor: '#74a9d8' },
      nonMonth: {backgroundColor: '#EEE'},
      day: {transition: 'all 0.2s ease-in-out', ':hover': {backgroundColor: '#DDD' }}
    }
  }

  render() {
    let styles = this.getStyle()
    let count = 0,
        nonMonth = true,
        today = new Date().getDate(),
        thisMonth = new Date().getMonth(),
        thisYear = new Date().getFullYear(),
        month = this.props.weeks.map(week => {
          let weekDisplay = week.map(day => {
            if(nonMonth === true && day === 1)
              nonMonth = false
            else if (nonMonth === false && day === 1)
              nonMonth = true

            let todaySpot = false
            if(today === day && thisMonth === this.props.month && thisYear === this.props.year)
              todaySpot = true

            count++
            return (
              <li
                className="calendarDaysItems"
                style={[styles.day, todaySpot && styles.today , nonMonth && styles.nonMonth]}
                key={count}
                onClick={() => this.showDayView(new Date(this.props.year, this.props.month, day))}>
                {day}<CalendarEvents nonMonth={nonMonth} day={new Date(this.props.year, this.props.month, day)}/>
              </li>)
          })
          return (<ul className="calendarDays" key={count * 40}>{weekDisplay}</ul>)
        }),
        daysHeading = medDays.map(day => {
          return (<li className="calHeadingItems" key={day}>{day}</li>)
        })
    return (
      <div className="calendarView">
        <ul className="calHeading">{daysHeading}</ul>
        {month}
      </div>
    )
  }
}

CalendarRenderer = Radium(CalendarRenderer)
export default CalendarRenderer
