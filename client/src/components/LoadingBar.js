import './LoadingBar.css';
import React from 'react';

class LoadingBar extends React.Component {
  render () {
    return (
      <div className="LoadingBar">
        <div className="LoadingBarAnimation ThemeBackground"></div>
      </div>
    )
  }
}

export default LoadingBar;
