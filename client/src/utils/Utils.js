class Utils {

  static rootElement = () => {
    return document.getElementById('caesar-app');
  }

  static isDarkTheme = () => {
    return document.getElementById('caesar-app').attributes.class.nodeValue.includes("Dark");
  }

  static isFeminineWord = (word = "") => {
    return !!word && word.endsWith('a');
  }

  static isMobile = () => {
    //TODO get Regex for check userAgent
    return false;
    // return navigator.userAgent.includes('Android');
  }
}

export default Utils;
