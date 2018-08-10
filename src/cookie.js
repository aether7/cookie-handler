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

  if (isString) {
    return results && results[1] ? results[1] : null;
  }

  return results && results[1] ? JSON.parse(results[1]) : null;
}

function cookieFactory() {
  var cookie = {
    get: function(key, isString, markAsErasable){
      isString = isString || false;
      markAsErasable = markAsErasable || false;
      var value = getCookie(key, isString);

      if(markAsErasable){
        this.remove(key);
      }

      return value;
    },
    set: function(key, value, days){
      days = days || 365;
      createCookie(key, value, addDays(days));
    },
    remove: function(key){
      createCookie(key, null, addDays(-7));
    }
  };

  return cookie;
}

module.exports = cookieFactory();
