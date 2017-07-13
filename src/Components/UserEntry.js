import React, { Component } from 'react';

import UserEntryView from './UserEntryView';
import UserEntryEdit from './UserEntryEdit';

class UserEntry extends Component {
  constructor() {
    super()
    this.state = {
      edit: false
    }
    this.toggleEdit=this.toggleEdit.bind(this)
  }

  toggleEdit() {
    let newEdit = !this.state.edit
    this.setState({edit: newEdit})
  }

  render() {
    if (this.state.edit) {
      return <UserEntryEdit
                totalTime={this.props.totalTime}
                user={this.props.user}
                editUser={this.props.editUser}
                edit={this.toggleEdit}/>
    } else {
      return <UserEntryView
                totalTime={this.props.totalTime}
                user={this.props.user}
                edit={this.toggleEdit}/>
    }
  }
}

export default UserEntry
