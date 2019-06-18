class Utils {

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
