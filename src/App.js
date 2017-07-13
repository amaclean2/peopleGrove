import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Router from './Components/Router';
import './App.css';

/*
  App.js contains all of the connection function to the server file and the links to the <Navigation /> and <Router /> Components
  The state for App.js contains the title for the application, the userId since it has to be kept throughout the whole application
    to validate some components, and the activityId so that when an activity is called, it can be accessed by the <EditActivity /> Component

  Functions in App.js:
    setUser(id) - sends the information to the server.js file to create a new user
    editUser(id, newAccount) - sends changes in account permissions
    addActivity(id, newActivity, newDescription) - sends new activity information to server.js file
      *This function returned a bad response 400 error that I couldn't figure out what was wrong,
      so it doesn't complete the request
    endActivity(activityId) - sends the activity id to the server file for a finish time to be added to the entry
    editActivity(activityId, newActivity, newDescription) - sends new information to be edited
*/

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

  /*
    function to retrive table information to be filled instead of SampleData, but since the responses
      won't work, the SampleData has to stay to demonstrate the app.
  */

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
    // renders <Navigation /> and <Router /> Components
    // <Router /> passes all the database functions to each component so they can send their own data
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
