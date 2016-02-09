(function(context, factory){
  if(typeof exports == 'undefined'){
    module.exports = factory();
  }else{
    context.cookies = factory();
  }
})(this, function(){
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

  var cookie = {
    get: function(key){
      var results = new RegExp(key + '=(.*?)(;|$)','g').exec(document.cookie);
      return results && results[1] ? results[1] : null;
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
});
