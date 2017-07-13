import React, { Component } from 'react';

import SampleData from './SampleData';

/*
  Renders the elements for the <DayView /> Component

  functions:
    goToView(id) - calls <EditActivity /> Component when called
*/

class DayEvents extends Component {

  goToView(id) {
    this.props.setActivity(id)
    window.location = '#/viewActivity'
  }

  render() {
    let i, events = []
    // selects the events out of the list of events to be added to this day
    for ( i in SampleData.Logs ) {
      if( i > 0 && this.props.day.getFullYear() === SampleData.Logs[i].startTime.getFullYear() &&
         this.props.day.getMonth() === SampleData.Logs[i].startTime.getMonth() &&
         this.props.day.getDate() === SampleData.Logs[i].startTime.getDate()) {
           events.push(SampleData.Logs[i])
      }
    }
    let count = 0
    let eventRender = events.map(event => {
      count++
      return (
        <li key={count} className="dayEvent" onClick={() => this.goToView(event.id)}>
          <h4>{event.activity}</h4>
          <span>{event.description}</span>
          <span className="dayViewTime">Start Time: {event.startTime.getHours()}:{event.startTime.getMinutes()}</span>
        </li>
      )
    })
    return (
      <div>
        <ul>
          {eventRender}
        </ul>
      </div>
    )
  }
}

export default DayEvents
