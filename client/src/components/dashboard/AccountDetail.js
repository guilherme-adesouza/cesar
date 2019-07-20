import './AccountDetail.css';
import React from 'react'
import PropTypes from 'prop-types'

class AccountDetail extends React.Component {

  state = {
    selectedAccount: 0,
  }

  changeSelectedAccount = (event, id) => {

  }

  render () {
    const {platform, accounts} = this.props;
    const account = accounts[this.state.selectedAccount];
    return (
      <div className="AccountDetail">
        <div className="AccountLogo">
          <img className="PlatformLogo" src={platform.logo} width="80"/>
          {!!account.level &&
            <span className="AccountLevel">{account.level}</span>
          }
        </div>
        <div className="AccountData">
          TESTE
        </div>
      </div>
    );
  }
}

export default AccountDetail;
