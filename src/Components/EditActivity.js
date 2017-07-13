import React, { Component } from 'react';

import SampleData from './SampleData';

import EditActivityView from './EditActivityView';
import EditActivityForm from './EditActivityForm';

/*
  Shows the view for editing and viewing an activity

  state:
    edit: determines when to show the edit form or just the information of the activity
    activity: the specific activity to be shown

  functions:
    toggleEdit() - swithces between edit and view
    showViews() - shows view or edit depending on the edit state property
    componentWillMount() - sets the activity state property
*/

class EditActivity extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      activity: null
    }
    this.toggleEdit=this.toggleEdit.bind(this)
  }

  toggleEdit() {
    let newEdit = !this.state.edit
    this.setState({edit: newEdit})
  }

  showViews() {
    if (this.state.edit && !this.state.activity.finished )
      return <EditActivityForm log={this.state.activity}
                editActivity={this.props.editActivity}
                back={this.toggleEdit} />
    else
      return <EditActivityView
                log={this.state.activity}
                edit={this.toggleEdit}
                setDate={this.props.setDate}
                endActivity={this.props.endActivity}/>
  }

  componentWillMount() {
    let activityId = this.props.id,
        newActivity = SampleData.Logs[activityId]
    this.setState({activity: newActivity})
  }

  render() {
    let views = this.showViews()
    return (
      <div className="wrapper smallWidth">
        {views}
      </div>
    )
  }
}

export default EditActivity
