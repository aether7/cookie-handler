function addTime(time) {
  const date = new Date();
  date.setTime(date.getTime() + time);
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

const addSeconds = time => addTime(time * 1000);
const addMinutes = time => addTime(addSeconds(time * 60));
const addHours = time => addTime(addSeconds(time * 3600));
const addDays = time => addTime(addSeconds(time * 86400));

const formats = {
  's': addSeconds,
  'm': addMinutes,
  'h': addHours,
  'd': addDays,
};

function cookieFactory() {
  const cookie = {
    get(key, isString, markAsErasable) {
      const value = getCookie(key, isString);

      if (markAsErasable) {
        this.remove(key);
      }

      return value;
    },
    set(key, value, time, format) {
      time = time || 365;
      format = format || 'd';
      const fn = formats[format];
      createCookie(key, value, fn(time));
    },
    remove: function removeI(key) {
      createCookie(key, null, addDays(-7));
    }
  };

  return cookie;
}

module.exports = cookieFactory();
