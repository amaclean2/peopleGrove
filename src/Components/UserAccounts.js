import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import SampleData from './SampleData';

import UserEntry from './UserEntry';

class UserAccounts extends Component {
  render() {
    let users = SampleData.Users.map(user => {
      let i, totalTime = 0
      for ( i in SampleData.Logs ) {
        if(SampleData.Logs[i].userId === user.id && SampleData.Logs[i].finishTime !== null) {
          let element = SampleData.Logs[i]
          totalTime += (element.finishTime.getTime() - element.startTime.getTime())
        }
      }
      totalTime /= 60000
      totalTime = Math.round(totalTime)

      if(user.id !== 0)
        return (<UserEntry key={user.id} editUser={this.props.editUser} user={user} totalTime={totalTime}/>)
      else
        return null
    })
    return (
      <div className="wrapper fullWidth">
        <h2>User Accounts</h2>
        <Table responsive hover bordered>
          <thead>
            <tr>
              <th>Username</th>
              <th>Time Logged</th>
              <th>Account Type</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UserAccounts
