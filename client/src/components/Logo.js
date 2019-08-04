import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../utils/Utils';

class Logo extends React.Component {

  static propTypes = {
    size: PropTypes.number,
  };

  static defaultProps = {
    size: 54,
  };

  state = {
    inDarkTheme: true,
  };

  //MIAU
  updateTheme(){
    const inDarkTheme = Utils.isDarkTheme();
    this.setState({inDarkTheme});
  }

  componentDidMount() {
    window._UPDATE_THEME = () => this.updateTheme();
    this.updateTheme();
  }

  render () {
    const {size, ...props} = this.props;

    const logoSrc = `caesar-logo${this.state.inDarkTheme ? '-white' : ''}.png`;
    return (
      <img className="CesarLogo" src={logoSrc} alt="Cesar Logo" width={size} height={size} {...props}/>
    )
  }
}

export default Logo;
