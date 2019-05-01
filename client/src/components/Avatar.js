import './Avatar.css'

import React, {Component} from 'react';

import EmptyPhoto from '../resources/images/empty-user-photo.png';

class Avatar extends Component {

  render(){
    return (
      <div className="Avatar">
        <span className="Username">Nome de Usuário</span>
        <img src={EmptyPhoto} alt="user_photo" className="UserPhoto"/>
      </div>
    )
  }
}

export default Avatar;
