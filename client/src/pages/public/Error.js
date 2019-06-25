import './Error.css';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Fausto from '../../resources/images/fausto_404.gif';

class Error extends Component {

  render(){
    console.log(this.props);
    return (
      <div className="NotFoundPage">
        <h1 className="Title">Errou!</h1>
        <img src={Fausto} alt="fausto_404" className="Fausto404"/>
        <p><Link to="/home">Clique aqui</Link> para voltar para a página inicial.</p>
      </div>
    )
  }
}

export default Error;
