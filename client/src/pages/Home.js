import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Home extends Component {

    navegacion = (event) => {
      this.props.history.push("/xixi");
    }

    render(){
      return(
        <React.Fragment>
          <h2>Home</h2>
          <div onClick={this.navegacion} style={{width: '500px', height: '500px', border: '1px solid'}}></div>
        </React.Fragment>
      )
    }
}

export default withRouter(Home);
