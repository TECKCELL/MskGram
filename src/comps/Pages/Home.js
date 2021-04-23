import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera,faSignInAlt,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
      
    this.props.history.push('/login');
  }

  async logout() {
    this.props.oktaAuth.signOut('/');
  }

  render() {
    if (this.props.authState.isPending) return null;

    const mainContent = this.props.authState.isAuthenticated ? (
        <div>
         
          <p>
           Click sur la camera pour accèder aux photos et sur la flèche pour te deconnecter {' '}
           <br/>
           <br/>
           <span><Link to='/Photos'><FontAwesomeIcon icon={faCamera} style={{marginRight:'5rem'}} >Clique ici</FontAwesomeIcon></Link></span>
           {'     '}
           <FontAwesomeIcon icon={faSignOutAlt}   onClick={this.logout} textRendering='Deconnexion'>
          </FontAwesomeIcon>
          </p>
          
         
        </div>
      ) : (
        <div className='home'>
          <p>
           Click sur l'icon et utilise les mots de passe pour te connecter
           <br></br>
           <br></br>
           <FontAwesomeIcon icon={faSignInAlt}  onClick={this.login}>
            Login
          </FontAwesomeIcon>
          </p>
          {/*<Link style={{marginRight:"1rem"}} to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>*/}
      
         
        </div>
      );

    return (
        <div className="home">
        <h1>MisakaGram portal</h1>
        <br></br>
        {mainContent}
      </div>
    );
  }
});