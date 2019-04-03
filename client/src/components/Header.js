import './Header.css';

import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb';
import EmptyPhoto from '../resources/images/empty-user-photo.png';

class Header extends Component {
    render(){
      return (
        <div className="Header">
          <Breadcrumb />
          <span className="Username">Nome de Usuário</span>
          <img src={EmptyPhoto} alt="user_photo" className="UserPhoto"/>
        </div>
      )
    }
}

export default Header;
