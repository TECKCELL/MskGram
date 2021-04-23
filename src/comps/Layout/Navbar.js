import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

 class Navbar extends Component {
    render() {
        return (
            <div>      
             <nav>
             <div>
             <Link style={{marginRight:"1rem"}} to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
             
             
                 {/*
                  <ul className="ul">
                <li className="li"></li>
                <li></li>
                </ul>
                <li><a href="#"><i class="fas fa-plus-square"></i></a></li>
                <li><a href="#"><i class="fas fa-heart"></i></a></li>
                <li><a href="#"><img src="https://avatars.io/instagram/fmondev" alt=""/></a></li>*/}
              
              </div>
             </nav>   
            </div>
        )
    }
}
export default Navbar;