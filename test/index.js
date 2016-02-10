var test = require('tape');
var cookies = require('../src/cookie');

test('it should create a cookie with key name greeting', function(assert){
  cookies.set('greeting', 'hello');

  var actual = document.cookie.indexOf('greeting');
  var expected = -1;

  assert.notEqual(actual, expected, 'greeting actual code marked position : ' + actual);
  assert.end();
});

test('it should get a greeting value', function(assert){
  cookies.set('greeting', 'bonjour');

  var actual = cookies.get('greeting');
  var expected = 'bonjour';

  assert.equal(actual, expected, 'greeting should return ' + expected + ' but it returns ' + actual);
  assert.end();
});
