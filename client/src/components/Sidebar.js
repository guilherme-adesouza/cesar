import './Sidebar.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";

import MaterialIcon from './MaterialIcon';

class Sidebar extends Component {

    state = {
      navigationList: [
        {link: "/dashboard", icon: "dashboard", name: "Dashboard"},
        {link: "/inventory", icon: "assignment_outline", name: "Inventário"},
        {link: "/races", icon: "timer_outline", name: "Corridas"},
        {link: "/games", icon: "videogame_asset_outline", name: "Jogos"},
        {link: "/achievements", icon: "star_rate_outline", name: "Conquistas"},
        {link: "/accounts", icon: "account_balance_wallet_outline", name: "Contas"},
        {link: "/platforms", icon: "airplay_outline", name: "Plataformas"},
      ]
    }

    render(){
      return (
        <div className="Sidebar">
          <div className="Logo ThemeBackground Shadow">
            <Link to="/home" className="HideLink">
              <img src="caesar-logo-white.png" width="42" height="42" alt="Caesar Logo"/>
              CAESAR
            </Link>
          </div>
          <nav className="Navigation">
            <ul className="NavigationList">
              {this.state.navigationList.map((item, idx) =>
                  <Link key={idx} to={item.link} className="HideLink">
                    <li className="NavigationItem Hover">
                      <MaterialIcon name={item.icon}/>
                      <span>{item.name}</span>
                    </li>
                  </Link>
              )}
            </ul>
          </nav>
        </div>
      )
    }
}

export default Sidebar;
