import React from 'react'
import ReactDOM from 'react-dom';
import Utils from '../utils/Utils';

const Dropdown = (props) => {
  ReactDOM.createPortal(
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
    Utils.rootElement
  )
}

export default Dropdown;
