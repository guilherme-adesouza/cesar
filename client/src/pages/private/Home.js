import './Home.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import AccountDetail from "../../components/dashboard/AccountDetail";

class Home extends Component {

  state = {
    playerAccounts: [
      {
        platform: {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png'
        },
        accounts: [
          {
            level: 80
          }
        ]
      },
      {
        platform: {
          logo: 'https://pbs.twimg.com/media/DfekaqCWkAAt2X5.jpg'
        },
        accounts: [
          {
            level: 80
          }
        ]
      },
      {
        platform: {
          logo: 'https://cdn.iconscout.com/icon/free/png-512/playstation-34-569261.png'
        },
        accounts: [
          {
          }
        ]
      }
    ],
  }

  componentDidMount(){
    //carrega dados
  }

  render(){
    return(
      <React.Fragment>
        <h1 className="Title">Dashboard</h1>
        <div className="AccountDetailContainer">
          {this.state.playerAccounts.map((playerAccount, idx) =>
            <AccountDetail key={idx} platform={playerAccount.platform} accounts={playerAccount.accounts}/>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Home);
