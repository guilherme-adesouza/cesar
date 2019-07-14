import './UiMsg.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../utils/Utils';
import MaterialIcon from './MaterialIcon';

export const MessagesTypes = {
  'WARNING': 'Warning',
  'ERROR': 'Error',
  'SUCCESS': 'Success'
};


class UiMsgComponent extends React.Component {

  closeMessage = (event) => {
    event.preventDefault();
    ReactDOM.unmountComponentAtNode(UiMsg.getWrapper());
  }

  componentDidMount(){
    setTimeout(function(){
      ReactDOM.unmountComponentAtNode(UiMsg.getWrapper());
    }, 5000);
  }

  render () {
    const {messageType, message} = this.props
    return (
      <div className={`UiMsg ${messageType}`}>
        <span className="Message">{message}</span>
        <MaterialIcon name="close" onClick={this.closeMessage}/>
      </div>
    )
  }

}
class UiMsg {

  static wrapperId = 'UiMsgWrapper';

  static createWrapper(){
    const div = document.createElement("div");
    div.setAttribute("id", UiMsg.wrapperId);
    Utils.rootElement().appendChild(div);
  }

  static getWrapper(){
    if(!document.getElementById(UiMsg.wrapperId)) {
      UiMsg.createWrapper();
    }
    return document.getElementById(UiMsg.wrapperId);
  }

  static add(props){
    const wrapper = UiMsg.getWrapper();
    ReactDOM.render(
      <UiMsgComponent {...props}/>,
      wrapper
    )
  }

  static error(message, fixed = false){
    UiMsg.add({message, fixed, messageType: MessagesTypes.ERROR});
  }

  static success(message){
    UiMsg.add({message, messageType: MessagesTypes.SUCCESS});
  }

  static warning(message){
    UiMsg.add({message, messageType: MessagesTypes.WARNING});
  }
}

export default UiMsg;
