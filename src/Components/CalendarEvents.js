import React, { Component } from 'react';

import SampleData from './SampleData';

/*
  renders the events for each day of the month
*/

class CalendarEvents extends Component {

  render() {
    let i, events = []
    // checks if an event is on that day, if it is then it is added to events
    for ( i in SampleData.Logs ) {
      if( i > 0 && this.props.day.getFullYear() === SampleData.Logs[i].startTime.getFullYear() &&
         this.props.day.getMonth() === SampleData.Logs[i].startTime.getMonth() &&
         this.props.day.getDate() === SampleData.Logs[i].startTime.getDate() && this.props.nonMonth === false ) {
           events.push(SampleData.Logs[i])
         }
    }
    let count = 0
    let eventRender = events.map(event => {
      count++
      return (
        <li key={count}>{event.activity}</li>
      )
    })
    return (
      <div className="calEventBox">
        <ul>
          {eventRender}
        </ul>
      </div>
    )
  }
}

export default CalendarEvents
