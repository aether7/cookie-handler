var test = require('tape');
var cookies = require('../src/cookie');

function setup(key, val){
  cookies.set(key, val);
}

function teardown(key){
  cookies.remove(key);
}

test('it should create a cookie with key name greeting', function(assert){
  setup('greeting', 'hello');

  var actual = document.cookie.indexOf('greeting');
  var expected = -1;

  assert.notEqual(actual, expected, 'greeting actual code marked position : ' + actual);
  assert.end();

  teardown('greeting');
});

test('it should get a greeting value', function(assert){
  setup('greeting', 'bonjour');

  var actual = cookies.get('greeting');
  var expected = 'bonjour';

  assert.equal(actual, expected, 'greeting should return ' + expected + ' but it returns ' + actual);
  assert.end();

  teardown('greeting');
});

test('it should get a greeting value, then get null', function(assert){
  setup('greeting', 'hola');

  var actual = cookies.get('greeting', true);
  var expected = 'hola';

  assert.equal(actual, expected, 'greeting should return ' + expected + 'but it returns ' + actual);

  actual = cookies.get('greeting');
  expected = null;

  assert.equal(actual, expected, 'greeting should return ' + expected + 'but it returns ' + actual);
  assert.end();

  teardown('greeting');
});

test('it should get null when a inexistent key is given', function(assert){
  var actual = cookies.get('playlist');
  var expected = null;

  assert.equal(actual, expected, 'it should return ' + expected + ' but it returns ' + actual);
  assert.end();
});

test('it should remove a value when key is given', function(assert){
  setup('greeting', 'ciao');

  cookies.remove('greeting');

  var actual = cookies.get('greeting');
  var expected = null;

  assert.equal(actual, expected, 'it should return ' + expected + ' but it returns ' + actual);
  assert.end();

  teardown('greeting');
});
