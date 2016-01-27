;(function(){
  'use strict';

  function addDays(days){
    var date = new Date();
    var additionalDays = 1000 * 60 * 60 * 24 * days;
    date.setTime(date.getTime() + additionalDays);
    return date;
  }

  function createCookie(key, value, expires){
    var result = key + '=' + value + ';path=/;expires=' + expires.toUTCString();
    document.cookie = result;
  }

  function mapCookies(){
    return document.cookie.split('; ')
      .filter(function(value){ return value.trim(); })
      .reduce(function(acc, value){
        var values = value.split('=');
        acc[ values[ 0 ].trim() ] = values[ 1 ].trim();
        return acc;
      }, {});
  }

  function isEmptyObject(obj){
    for (var attr in obj) {
      return false;
    }

    return true;
  }

  var cookies = {};

  var cookie = {
    get: function(key){
      if(isEmptyObject(cookies)){
          cookies = mapCookies();
      }

      return key in cookies ? cookies[key] : null;
    },
    set: function(key, value, days){
      days = days || 365;
      createCookie(key, value, addDays(days));

      if(isEmptyObject(cookies)){
        cookies = mapCookies();
      }

      cookies[ key ] = value;
    },
    remove: function(key){
      createCookie(key, null, addDays(-7));

      if(!isEmptyObject(cookies)){
        delete cookies[ key ];
      }
    }
  };

  if (typeof exports == 'undefined') {
    window.cookie = cookie;
  } else {
    module.exports = cookie;
  }
})();
