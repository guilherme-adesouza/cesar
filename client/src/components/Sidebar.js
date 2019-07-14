import './Sidebar.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Utils from '../utils/Utils';
import MaterialIcon from './MaterialIcon';

class Sidebar extends Component {

    state = {
      userMaster: false,
      navigationList: [
        {link: "/dashboard", icon: "dashboard", name: "Dashboard"},
        {link: "/races", icon: "timer_outline", name: "Corridas"},
        {link: "/games", icon: "videogame_asset_outline", name: "Jogos"},
        {link: "/accounts", icon: "account_balance_wallet_outline", name: "Contas"},
        {link: "/platforms", icon: "airplay_outline", name: "Plataformas"},
        {link: "/players", icon: "person", name: "Players", master: true},
      ]
    }

    async componentDidMount() {
      const sessionInfo = await Utils.getSessionInfo();
      this.setState({userMaster: sessionInfo.user.master})
      if(Utils.isMobile()){
        this.props.toggleSidebar(false);
      }
    }

    toggleSidebar = (event) => {
      this.props.toggleSidebar();
    }

    render(){
      return (
        <nav className="Sidebar Navigation">
          <ul className="NavigationList">
            {this.state.navigationList.map((item, idx) => {
              if(item.master && !this.state.userMaster) return null;
              return (
                <li key={idx} className="NavigationItem Hover" title={item.name}>
                  <Link to={item.link} className="HideLink">
                    <MaterialIcon name={item.icon}/>
                    <span className="nowrap">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="SidebarToggle Hover" onClick={this.toggleSidebar}>
            <MaterialIcon name="list"/>
          </div>
        </nav>
      )
    }
}

export default Sidebar;
