import './Avatar.css';
import './Dropdown.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";

import EmptyPhoto from '../resources/images/empty-user-photo.png';
import Utils from '../utils/Utils';

class Avatar extends Component {

  state = {
    openDropdown: false,
    user: {},
  }

  async componentDidMount(){
    const sessionInfo = await Utils.getSessionInfo();
    if(!!sessionInfo){
      this.setState({user: sessionInfo.user})
    }
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({openDropdown: !this.state.openDropdown});
  }

  render(){
    const {user, openDropdown} = this.state;

    if(!user) return null;

    return (
        <div className="Avatar" onClick={this.toggleDropdown}>
          <span className="Username">{user.nickname}</span>
          <img src={user.avatar || EmptyPhoto} alt="user_photo" className="UserPhoto"/>
          {openDropdown &&
            <ul className="Dropdown Contrast">
              <li className="Hover">
                <Link className="HideLink" to="profile">Meu Perfil</Link>
              </li>
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
