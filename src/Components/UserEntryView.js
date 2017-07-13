import React, { Component } from 'react';

class UserEntryView extends Component {
  render() {
    let minutes = this.props.totalTime,
        hours = 0
    while(minutes >= 60) {
      hours++
      minutes -= 60
    }
    return (
      <tr key={this.props.user.id} onClick={this.props.edit}>
        <td>{this.props.user.userName}</td>
        <td>{hours} hours {minutes} min</td>
        <td>{this.props.user.account}</td>
      </tr>
    )
  }
}

export default UserEntryView
