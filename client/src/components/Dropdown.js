import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {

  static defaultProps = {
    listItems: []
  }

  render(){
    return ReactDOM.createPortal(
      <ul className="Dropdown Contrast">
        {this.props.listItems.map((item, idx) => {
            return (
              <li className="DropdownItem Hover" key={idx}>
                {item}
              </li>
            )
          })
        }
      </ul>,

    )
  }
}
