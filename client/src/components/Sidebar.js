import './Sidebar.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Sidebar extends Component {

    state = {
      navigationList: [
        {link: "/dashboard", name: "Dashboard"},
        {link: "/inventory", name: "Inventário"},
        {link: "/races", name: "Corridas"},
        {link: "/games", name: "Jogos"},
        {link: "/achievements", name: "Conquistas"},
        {link: "/accounts", name: "Contas"},
        {link: "/plataforms", name: "Plataformas"},
      ]
    }

    render(){
      return (
        <div className="Sidebar">
          <div className="Logo">
            <Link to="/home" className="HideLink">CAESAR</Link>
          </div>
          <nav className="Navigation">
            <ul className="NavigationList">
              {this.state.navigationList.map((item, idx) =>
                  <Link key={idx} to={item.link} className="HideLink">
                    <li className="NavigationItem Hover">
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
