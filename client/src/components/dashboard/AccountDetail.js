import './AccountDetail.css';
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

class AccountDetail extends React.Component {

  state = {
    selectedAccount: 0,
  };

  changeSelectedAccount = (event, id) => {
      this.setState({selectedAccount: id});
  };

  render () {
    const {platform, accounts} = this.props;
    const account = accounts[this.state.selectedAccount];
    return (
      <div className="AccountDetail">
        <div className="AccountLogo">
          <a href={account.link}>
              <img className="PlatformLogo" src={platform.logo} alt="Platform Logo" width="80"/>
          </a>
          {!!account.level &&
            <span className="AccountLevel" title={`Level: ${account.level}`}>{account.level}</span>
          }
        </div>
        <div className="AccountData">
            <div className="AccountDataDetail">
                <Link to="#" className="HideLink DataDetailTitle">Jogos</Link>
                <div className="DataDetailValue">120</div>
            </div>
            <div className="AccountDataDetail">
                <Link to="#" className="HideLink DataDetailTitle">Conquistas</Link>
                <div className="DataDetailValue">120</div>
            </div>
            <div className="AccountDataDetail">
                <Link to="#" className="HideLink DataDetailTitle">Pontos</Link>
                <div className="DataDetailValue">120</div>
            </div>
        </div>
        {/* <div className="AccountAction">
            <Link to="#" className="HideLink ThemeBackground">AÇÃO</Link>
        </div> */}
      </div>
    );
  }
}

export default AccountDetail;
