import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class UserEntry extends Component {
  constructor() {
    super()
    this.state = {
      account: null
    }
    this.setAccount=this.setAccount.bind(this)
    this.handleSave=this.handleSave.bind(this)
  }

  setAccount(e) {
    let newAccount = e.target.value
    this.setState({account: newAccount})
  }

  handleSave() {
    this.props.editUser(this.props.user.userName, this.state.account)
    this.props.edit()
  }

  componentWillMount() {
    this.setState({account: this.props.user.account})
  }

  render() {
    let minutes = this.props.totalTime,
        hours = 0
    while(minutes >= 60) {
      hours++
      minutes -= 60
    }
    return (
      <tr key={this.props.user.id}>
        <td>{this.props.user.userName}</td>
        <td>{hours} hours {minutes} min</td>
        <td>
          <FormControl componentClass="select" onChange={this.setAccount} defaultValue={this.props.user.account}>
          <option disabled value="select">Select a Level</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </FormControl>
      </td>
      <td>
        <Button bsStyle="primary" onClick={() => this.handleSave()}>Save</Button>
      </td>
      </tr>
    )
  }
}

export default UserEntry
