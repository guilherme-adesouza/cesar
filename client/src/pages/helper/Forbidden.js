import React, {Component} from 'react';
import Gandalf from '../../resources/images/you-shall-not-pass-403.gif';

class Forbidden extends Component {

  render(){
    const {location} = this.props;
    return (
      <div className="ForbiddenPage">
        <h1 className="Title">Errou!</h1>
        <img src={Gandalf} alt="gandalf_403" className="404"/>
        <p>Erro 403: Você não tem permissão para acessar <code><span className="nowrap">{location.pathname}</span></code></p>
      </div>
    )
  }
}

export default Forbidden;
