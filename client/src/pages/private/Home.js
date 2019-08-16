import './Home.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import AccountDetail from "../../components/dashboard/AccountDetail";
import Api from '../../service/Api';
import UiMsg from "../../components/UiMsg";
import Button from "../../components/Button";
import MaterialIcon from "../../components/MaterialIcon";

class Home extends Component {

  state = {
    loading: true,
    gridMode: false,
    playerAccounts: [],
  };

  async componentDidMount(){
    await this.getPlayerAccountInfo();
  }

  getPlayerAccountInfo = async () => {
    this.setState({loading: true});
    try {
      const playerAccounts = await Api.Account.getPlayerInfo();
      this.setState({playerAccounts});
    } catch (e) {
      console.error(e);
      UiMsg.error('Erro ao carregar informações!');
    } finally {
      this.setState({loading: false});
    }
  };

  toggleView = (e) => {
    this.setState({gridMode: !this.state.gridMode});
  };

  render(){
    if(this.state.loading) return null;
    return(
      <React.Fragment>
        <h1 className="Title">Dashboard</h1>
        <Button onClick={this.toggleView} className="GridButton">
          <MaterialIcon name={`${this.state.gridMode ? 'view_module' : 'format_list_bulleted'}`}/>
        </Button>
        <div className={`${this.state.gridMode ? 'GridMode' : ''} AccountDetailContainer`}>
          {Object.getOwnPropertyNames(this.state.playerAccounts).map((platformId, idx) => {
            return (<AccountDetail key={idx}
                           platform={this.state.playerAccounts[platformId].platform}
                           accounts={this.state.playerAccounts[platformId].accounts}
            />)
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Home);
