import React, { Component } from 'react';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';

import Months from './Months';

/*
  renders the component to view an activty

  functions:
    handleEndActivity() - sends the finish time to the server and goes back to <DayView />
    getFinished() - shows the finish time if the activty is finished or the end button if it isn't
*/

class EditActivityView extends Component {
  constructor() {
    super()
    this.handleEndActivity=this.handleEndActivity.bind(this)
  }

  handleEndActivity() {
    this.props.setDate(new Date())
    this.props.endActivity(this.props.log.id)
    window.location = '#/dayView'
  }

  getFinished() {
    let log=this.props.log,
        min=log.finishTime.getMinutes(),
        hour=log.finishTime.getHours(),
        day=log.finishTime.getDate(),
        month=Months[log.finishTime.getMonth()],
        year=log.finishTime.getFullYear(),
        dayZone = 'AM'
    if (hour > 12) {
      hour -= 12
      dayZone = 'PM'
    }
    if (log.finished) {
      return (<div><b>Finish time:</b> {month} {day}, {year} {hour}:{min} {dayZone}</div>)
    } else {
      return (<Button bsStyle="primary" onClick={this.handleEndActivity}>End Activity</Button>)
    }
  }

  render() {
    // renders the time the activity started
    let finishTime = this.getFinished(),
        month = Months[this.props.log.startTime.getMonth()],
        year = this.props.log.startTime.getFullYear(),
        day = this.props.log.startTime.getDate(),
        startHour = this.props.log.startTime.getHours(),
        dayZone = 'AM',
        hours = 0,
        minutes = 0
    if (startHour > 12) {
      startHour -= 12
      dayZone = 'PM'
    }

    // renders the time since the activity started
    if(!this.props.log.finished) {
      let time = new Date().getTime() - this.props.log.startTime.getTime()
      time /= 60000
      minutes = Math.round(time);
      while (minutes >= 60) {
        hours++
        minutes -= 60
        minutes = ('0' + minutes).slice(-2)
      }
    }
    else {
      minutes = this.props.log.totalTime
      while (minutes >= 60) {
        hours++
        minutes -= 60
        minutes = ('0' + minutes).slice(-2)
      }
    }
    let plural = (hours > 1) ? 's' : null

    return (
      <div onClick={this.props.edit} className="clickable">
        <h3>{this.props.log.activity} - {hours} hour{plural} {minutes} min</h3>
        <div className="indent">
          <FormGroup>{this.props.log.description}</FormGroup>
          <FormGroup><ControlLabel>Start time:</ControlLabel> {month} {day}, {year} {startHour}:{minutes} {dayZone}</FormGroup>
          {finishTime}
        </div>
      </div>
    )
  }
}

export default EditActivityView
