import './Avatar.css';
import './Dropdown.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";

import EmptyPhoto from '../resources/images/empty-user-photo.png';

class Avatar extends Component {

  state = {
    openDropdown: false
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({openDropdown: !this.state.openDropdown});
  }

  render(){
    return (
        <div className="Avatar" onClick={this.toggleDropdown}>
          <span className="Username">Nome de Usuário</span>
          <img src={EmptyPhoto} alt="user_photo" className="UserPhoto"/>
          {this.state.openDropdown &&
            <ul className="Dropdown Contrast">
              <li className="Hover">
                  <Link className="HideLink" to="logout">Sair</Link>
              </li>
            </ul>
          }
        </div>
    )
  }
}

export default Avatar;
