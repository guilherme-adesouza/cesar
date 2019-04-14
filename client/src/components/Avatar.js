import './Avatar.css'

import React, {Component} from 'react';

import EmptyPhoto from '../resources/images/empty-user-photo.png';

class Avatar extends Component {

  render(){
    return (
      <React.Fragment>
        <span className="Username">Nome de Usuário</span>
        <img src={EmptyPhoto} alt="user_photo" className="UserPhoto"/>
      </React.Fragment>
    )
  }
}

export default Avatar;
