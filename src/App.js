import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Router from './Components/Router';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Task Logger',
      userId: 0,
      activityId: 0
    }
    this.setUser=this.setUser.bind(this)
    this.editUser=this.editUser.bind(this)
    this.addActivity=this.addActivity.bind(this)
    this.endActivity=this.endActivity.bind(this)
    this.editActivity=this.editActivity.bind(this)
  }

  setUser(id) {
    this.setState({userId: id})
    let data = {
      username: id
    }
    let request = new Request('http://localhost:3001/api/new-user', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })
    fetch(request)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data)
          })
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  editUser(id, newAccount) {
    let data = {
      username: id,
      account: newAccount
    }
    let request = new Request('http://localhost:3001/api/edit-user', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })
    fetch(request)
      .then((response) => {
        response.json()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addActivity(id, newActivity, newDescription) {
    let data = {
      username: id,
      activity: newActivity,
      description: newDescription
    }
    let request = new Request('http://localhost:3001/api/add-activity', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })
    fetch(request)
      .then((response) => {
        response.json()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  endActivity(activityId) {
    let data = {
      activity: activityId
    }
    let request = new Request('http://localhost:3001/api/end-activity', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'applications/json' }),
      body: data
    })
    fetch(request)
      .then(function(response) {
          response.json()
            .then(function(data) {
              console.log(data)
            })
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  editActivity(activityId, newActivity, newDescription) {
    let data = {
      activity: activityId,
      activityName: newActivity,
      description: newDescription
    }
    let request = new Request('http://localhost:3001/api/activities', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'applications/json' }),
      body: JSON.stringify(data)
    })
    fetch(request)
      .then(function(response) {
          response.json()
            .then(function(data) {
              console.log(data)
            })
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  // componentWillMount() {
  //   fetch('http://localhost:3001/api/users')
  //     .then(function(response) {
  //       response.json()
  //         .then(function(data) {
  //           console.log(data)
  //         })
  //     })
  // }

  render() {
    return (
      <div className="App">
        <h1 className="title">{this.state.title}</h1>
        <Navigation userId={this.state.userId}/>
        <Router
          setUser={this.setUser}
          editUser={this.editUser}
          addActivity={this.addActivity}
          endActivity={this.endActivity}
          editActivity={this.editActivity}
          userId={this.state.userId} />
      </div>
    );
  }
}

export default App;
