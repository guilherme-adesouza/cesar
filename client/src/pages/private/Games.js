import './Games.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import GameService from '../../service/GameService';

class GamesPage extends Component {

  state = {
    loading: true,
    games: [],
  }

  async componentDidMount(){
    await this.getGamesList();
  }

  getGamesList = async () => {
    this.setState({loading: true});
    try {
      const games = await new GameService().getAll();
      this.setState({games});
    } catch(e) {
      console.error('error', e);
    } finally {
      this.setState({loading: false});
    }
  }


  render(){
    const {loading, games} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title">Games</h2>
        </div>
        <Table data={games} object="jogo"/>
      </div>
    )
  }

}

export default GamesPage;
