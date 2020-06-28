export const setCookie = (key, value) => {
  var expires = new Date();
  expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
};

export const getCookie = (key) => {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
};

export const removeCookie = () => {
  var expires = new Date();
  expires.setTime(expires.getTime() + 1);
  document.cookie = "id=" + 0 + ";expires=" + expires.toUTCString();
  return 0;
};
