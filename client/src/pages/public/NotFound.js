import React, {Component} from 'react';
import Fausto from '../../resources/images/fausto_404.gif';

class NotFound extends Component {

  render(){
    const {location} = this.props;
    return (
      <div className="NotFoundPage">
        <h1 className="Title">Errou!</h1>
        <img src={Fausto} alt="fausto_404" className="Fausto404"/>
        <p>Erro 404: Não encontramos nada para <code><span className="nowrap">{location.pathname}</span></code></p>
      </div>
    )
  }
}

export default NotFound;
