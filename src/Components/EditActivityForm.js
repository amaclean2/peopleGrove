import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class EditActivityForm extends Component {
  constructor() {
    super()
    this.state = {
      activity: null,
      description: null
    }
    this.setActivity=this.setActivity.bind(this)
    this.setDescription=this.setDescription.bind(this)
    this.handleSend=this.handleSend.bind(this)
  }

  setActivity(e) {
    let newActivity = e.target.value
    this.setState({activity: newActivity})
  }

  setDescription(e) {
    let newDescription = e.target.value
    this.setState({description: newDescription})
  }

  handleSend() {
    this.props.editActivity(this.props.log.id, this.state.activity, this.state.description)
    this.props.back()
  }

  render() {
    return (
      <div>
        <FormGroup>
          <ControlLabel>Activity</ControlLabel>
          <FormControl placeholder="Activity Name" onChange={this.setActivity} defaultValue={this.props.log.activity} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl placeholder="Description" onChange={this.setDescription} defaultValue={this.props.log.description} />
        </FormGroup>
        <Button bsStyle="primary" onClick={() => this.handleSend()}>Save</Button>
      </div>
    )
  }
}

export default EditActivityForm
