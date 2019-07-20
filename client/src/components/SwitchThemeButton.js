import './SwitchThemeButton.css';
import React from 'react';

import Utils from '../utils/Utils';

class SwitchThemeButton extends React.Component {

    switchTheme = (e) => {
      if(Utils.isDarkTheme()){
        document.body.className = "";
      } else {
        Utils.addBodyClassName("Dark");
      }
      window._UPDATE_THEME();
    }

    render(){
        return (
          <button className="SwitchTheme" onClick={this.switchTheme}>
            <i className="material-icons">brightness_6</i>
          </button>
        )
    }

}

export default SwitchThemeButton;
