import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';



 class SigninWidget extends Component {
    
  componentDidMount() {
    
   const el =   ReactDOM.findDOMNode(this);
    //signing widget config
   const signInWidgetConfig = {
        
        logo: '//logo.clearbit.com/photographytalk.com', 
        language: 'fr',                       
        // Changes to widget functionality
        features: {
          registration: false,                 
          rememberMe: true,                   
           smsRecovery: true,                
          router: true,                       
        },
        baseUrl: this.props.baseUrl,
        clientId: '0oa2yjwdaxEqdOQTr5d6',
        redirectUri: 'https://misakagram.herokuapp.com/login/callback',
        authParams: {
          issuer: 'https://dev-2739432.okta.com/oauth2/default',
          responseType: ['id_token', 'token'],
          scopes: ['openid', 'email', 'profile'],
          pkce: false,
        },
      };
    
    this.widget = new OktaSignIn(signInWidgetConfig);      
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
   
    
    
        
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div className="Home" />;
  }
};
export default SigninWidget