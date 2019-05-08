function addDays(days) {
  var date = new Date();
  var additionalDays = 1000 * 60 * 60 * 24 * days;
  date.setTime(date.getTime() + additionalDays);
  return date;
}

function createCookie(key, value, expires) {
  var result = key + '=' + JSON.stringify(value) + ';path=/;expires=' + expires.toUTCString();
  document.cookie = result;
}

function getCookie(key, isString) {
  var results = new RegExp(key + '=(.*?)(;|$)','g').exec(document.cookie);

  if (!results) {
    return null;
  }

  return isString ? results[1] : JSON.parse(results[1]);
}

function cookieFactory() {
  var cookie = {
    get: function getI(key, isString, markAsErasable) {
      var value = getCookie(key, isString);

      if(markAsErasable){
        this.remove(key);
      }

      return value;
    },
    set: function setI(key, value, days) {
      days = days || 365;
      createCookie(key, value, addDays(days));
    },
    remove: function removeI(key) {
      createCookie(key, null, addDays(-7));
    }
  };

  return cookie;
}

module.exports = cookieFactory();
