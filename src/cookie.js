function addSeconds(time){
  var date = new Date();
  var additionalTime = 1000 * time;
  date.setTime(date.getTime() + additionalTime);
  return date;
}

function addMinutes(time){
  var date = new Date();
  var additionalTime = 1000 * 60 * time;
  date.setTime(date.getTime() + additionalTime);
  return date;
}

function addHours(time) {
  var date = new Date();
  var additionalTime = 1000 * 60 * 60 * time;
  date.setTime(date.getTime() + additionalTime);
  return date;
}

function addDays(time) {
  var date = new Date();
  var additionalTime = 1000 * 60 * 60 * 24 * time;
  date.setTime(date.getTime() + additionalTime);
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
    set: function setI(key, value, time, format) {
      var fn;
      time = time || 365;
      format = format || 'd';
      
      switch(format){
      case 's':
        fn = addSeconds;
        break;
      case 'm':
        fn = addMinutes;
        break;
      case 'h':
        fn = addHours;
        break;
      default:
        fn = addDays;
        break;
      }

      createCookie(key, value, fn(time));
    },
    remove: function removeI(key) {
      createCookie(key, null, addDays(-7));
    }
  };

  return cookie;
}

module.exports = cookieFactory();
