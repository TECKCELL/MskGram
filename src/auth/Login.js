import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SigninWidget from './SigninWidget';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: null
      };
      //this.onSuccess = this.onSuccess.bind(this);
      //this.onError = this.onError.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.oktaAuth.isAuthenticated();
        
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated });
        }
      }
  
    onSuccess=(res)=> {
      if (res.status === 'SUCCESS') {
        return this.props.oktaAuth.signInWithRedirect({sessionToken: res.tokens});
        
     } else {
      // The user can be in another authentication state that requires further action.
      // For more information about these states, see:
      //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
      }
    }
    
    onError=(err)=> {
      console.log('error logging in', err);

    }
  
  
    render() {
      return this.props.authState.isAuthenticated ?
        <Redirect to={{ pathname: '/Photos' }}/> :
        <SigninWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}/>;
    }
  });