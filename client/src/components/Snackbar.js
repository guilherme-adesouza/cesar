import './Snackbar.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const SnackType = {
  NONE: {
    name: 'None',
    icon: null,
  },
  ERROR: {
    name: 'Error',
    icon: null
  },
  SUCCESS: {
    name: 'Success',
    icon: null
  },
  ALERT: {
    name: 'Alert',
    icon: null
  }
}

class Snackbar extends Component {

  state = {
    snackType: SnackType.NONE,
  }

  render(){
    const {snackType} = this.state;
    const {message} = this.props;

    return (
      <div className={`Snackbar ${snackType.name}`}>
        <i className="material-icons">{snackType.icon}</span>
        <span className="SnackbarMessage">{message}</span>
      </div>
    )
  }
}

class Snackbar extends Component {

  state = {
    snackType: SnackType.NONE
  }

  render(){
    const {snackType} = this.state;
    const {message} = this.props;

    return (
      <div className={`Snackbar ${snackType.name}`}>
        <i className="material-icons">{snackType.icon}</i>
        <span className="SnackbarMessage">{message}</span>
      </div>
    )
  }
}

export const SnackType;
export class Snackbar;
