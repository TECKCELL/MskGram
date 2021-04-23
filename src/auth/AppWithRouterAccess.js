import React from 'react';
import {Route } from 'react-router-dom'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Login from './Login';
import PhotosWrapper from '../comps/Pages/PhotosWrapper';
import Home from '../comps/Pages/Home';
import { OktaAuth} from '@okta/okta-auth-js';

   const oktaAuth = new OktaAuth({
    issuer: 'https://dev-2739432.okta.com/oauth2/default',
    clientId: '0oa2yjwdaxEqdOQTr5d6',
    redirectUri: 'https://misakagram.herokuapp.com/login/callback'
    

  });


const AppWithRouterAccess = () => {
 
  return (
   
    <Security oktaAuth={oktaAuth}
       /*onAuthRequired={customAuthHandler}*/>
     <div className="App">
        
        <Route path='/' exact={true} component={Home}></Route>
        <SecureRoute path='/Photos' exact={true} component={PhotosWrapper}></SecureRoute>
        <Route path='/login' render={() => (
                  <Login baseUrl='https://dev-2739432.okta.com/' />
                )}  />
       <Route path='/login/callback' component={LoginCallback } />
      </div>
      </Security>
     
   );
  }
export default AppWithRouterAccess;