import './Players.css';
import React, {Component} from 'react';

import Table from '../../components/Table';
import Api from '../../service/Api';

class Player extends Component {

  state = {
    loading: true,
    players: [],
  }

  async componentDidMount(){
    await this.getPlayersList();
  }

  getPlayersList = async () => {
    this.setState({loading: true});
    try {
      const players = await Api.User.getAll();
      this.setState({players});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  }

  render(){
    const {loading, players} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title">Players</h2>
        </div>
        <Table data={players} object="usuário"/>
      </div>
    )
  }
}

export default Player;
