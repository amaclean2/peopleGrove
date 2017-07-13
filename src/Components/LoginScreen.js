import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class LoginScreen extends Component {
  constructor() {
    super()
    this.responseFacebook=this.responseFacebook.bind(this)
  }

  responseFacebook(response) {
    this.props.setUser(response.id)
  }

  render() {
    return (
      <div className="wrapper smallWidth loginScreen">
        <FacebookLogin
          appId='1729099260723090'
          autoLoad={true}
          fields="name,email,picture"
          cssClass="facebookButton"
          callback={this.responseFacebook}
          icon="fa-facebook" />
      </div>
    )
  }
}

export default LoginScreen
