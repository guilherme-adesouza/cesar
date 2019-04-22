import './Platforms.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import PlatformService from '../../service/PlatformService';

class PlatformsPage extends Component {

  state = {
    loading: true,
    platforms: [],
  }

  async componentDidMount(){
    try {
      const {platforms} = await PlatformService.getAll();
      this.setState({platforms});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  }

  render(){
    if(this.state.loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">Plataformas</div>
        <Table data={this.state.platforms} />
      </div>
    )
  }

}

export default PlatformsPage;
