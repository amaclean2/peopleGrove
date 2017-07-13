import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import LoginScreen from './LoginScreen';
import AddActivity from './AddActivity';
import Calendar from './Calendar';
import DayView from './DayView';
import EditActivity from './EditActivity';
import UserAccounts from './UserAccounts';

class Router extends Component {
  constructor() {
    super()
    this.state = {
      date: null,
      activityId: null
    }
    this.setDate=this.setDate.bind(this)
    this.setActivity=this.setActivity.bind(this)
  }

  setDate(newDate) {
    this.setState({date: newDate})
  }

  setActivity(newId) {
    this.setState({activityId: newId})
  }

  showActivity() {
    if(this.state.activityId === null) {
      return (<Calendar userId={this.props.userId} setDate={this.setDate}/>)
    } else {
      return (
        <EditActivity
            userId={this.props.userId}
            id={this.state.activityId}
            editActivity={this.props.editActivity}
            endActivity={this.props.endActivity}
            setDate={this.setDate}/>
      )
    }
  }

  render() {
    let active = this.showActivity()
    return (
      <HashRouter>
        <div>
          <Route exact path="/" render={props => (<LoginScreen userId={this.props.userId} setUser={this.props.setUser}/>)} />
          <Route exact path="/login" render={props => (<LoginScreen userId={this.props.userId} setUser={this.props.setUser}/>)} />
          <Route exact path="/addActivity" render={props => (<AddActivity
                                                                userId={this.props.userId}
                                                                addActivity={this.props.addActivity}
                                                                setDate={this.setDate}/>)} />
          <Route exact path="/viewActivity" render={props => (active)} />
          <Route exact path="/calendar" render={props => (<Calendar userId={this.props.userId} setDate={this.setDate}/>)} />
          <Route exact path="/dayView" render={props => (<DayView userId={this.props.userId} date={this.state.date} setActivity={this.setActivity}/> )} />
          <Route exact path="/users" render={props => (<UserAccounts editUser={this.props.editUser} userId={this.props.userId} />)} />
          <Route exact path="/*" render={props => (<Redirect to="/"/>)} />
        </div>
      </HashRouter>
    )
  }
}

export default Router
