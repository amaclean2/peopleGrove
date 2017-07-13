import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class AddActivity extends Component {
  constructor() {
    super()
    this.state = {
      activity: null,
      description: null
    }
    this.handleAdd=this.handleAdd.bind(this)
    this.setActivity=this.setActivity.bind(this)
    this.setDescription=this.setDescription.bind(this)
  }

  setActivity(e) {
    let newActivity = e.target.value
    this.setState({activity: newActivity})
  }

  setDescription(e) {
    let newDescription = e.target.value
    this.setState({description: newDescription})
  }

  handleAdd(e) {
    e.preventDefault()
    let userId = this.props.userId,
        newActivity = this.state.activity,
        description = this.state.description

    this.props.addActivity(userId, newActivity, description)
    this.goToDay()
  }

  goToDay() {
    let today = new Date()
    this.props.setDate(today)
    window.location = "#/dayView"
  }

  render() {
    return (
      <div className="wrapper smallWidth">
        <h2>Add Activity</h2>
        <form ref="activityForm" >
          <FormGroup>
            <ControlLabel>Activity</ControlLabel>
            <FormControl type="text" onChange={this.setActivity} placeholder="Activity Name" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl type="text" onChange={this.setDescription} placeholder="Description" />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleAdd}>Start</Button>
        </form>
      </div>
    )
  }
}

export default AddActivity
