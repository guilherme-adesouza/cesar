import Api from '../service/Api';

class Utils {

  static SESSION_KEY = 'info'

  static setSessionInfo = (info = null) => {
    if(!info){
      sessionStorage.clear();
      return;
    }
    sessionStorage.setItem(Utils.SESSION_KEY, JSON.stringify(info));
  }

  static getSessionInfo = async () => {
    let data = sessionStorage.getItem(Utils.SESSION_KEY);
    if(!data){
      let info = await Api.User.getUserData();
      Utils.setSessionInfo({user: info});
      return Utils.getSessionInfo();
    }
    return JSON.parse(data);
  }

  static rootElement = () => {
    return document.getElementById('caesar-app');
  }

  static isDarkTheme = () => {
    return Utils.bodyClassContains("Dark");
  }

  static isFeminineWord = (word = "") => {
    return !!word && word.endsWith('a');
  }

  static isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  static bodyClassContains = (className) => {
    return document.body.className.includes(className);
  }

  static addBodyClassName = (className) => {
    if(!Utils.bodyClassContains(className)){
      document.body.className += " " + className;
    }
  }

  static removeBodyClassName = (className) => {
    document.body.className.replace(`/\b${className}\b/g`, "");
  }

  static formatDate = (date) => {
    if(!!date){
      let formattedDate = date;
      if(typeof date === 'string'){
        formattedDate = new Date(date);
      }
      return formattedDate.toISOString().split('T')[0];
    }
    return "";
  }

  static setMobileView = () => {
    const isMobile = Utils.isMobile();
    if(isMobile) {
      Utils.addBodyClassName("Mobile");
    } else {
      Utils.removeBodyClassName("Mobile")
    }
  }
}

export default Utils;
