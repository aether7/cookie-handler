const cookies = require('../src/cookie');

describe('cookie', () => {
  afterEach(() => {
    document.cookie = "DYNAMIC_DATA_COOKIE=Norman*10";
    document.cookie = 'greetingJson={"greeting":"hello"}';
  });

  test('cookies should be an object', () => {
    expect(typeof cookies).toBe('object');
  });

  test('cookies should have a get method', () => {
    expect(typeof cookies.get).toBe('function');
  });

  test('it should get a greeting value set like string', () => {
    const actual = cookies.get('DYNAMIC_DATA_COOKIE', true);
    const expected = 'Norman*10';
    expect(actual).toBe(expected);
  });

  test('it should get a greeting value set like a Json', () => {
    const actual = cookies.get('greetingJson');
    const expected = {greeting: "hello"};
    expect(actual.greeting).toBe(expected.greeting);
  });

  test('cookies should have a set method', () => {
    expect(typeof cookies.set).toBe('function');
  });

  test('it should set new cookie', () => {
    cookies.set('cookie', 'cool', 1);
    const actual = cookies.get('cookie');
    const expected = 'cool';
    expect(actual).toBe(expected);

  });

  test('it should ask for a cookie and errase that', () => {
    cookies.get('cookie', false, true);
    const actual = cookies.get('cookie', false, true);
    const expected = null;
    expect(actual).toBe(expected);
  });

  test('it should ask for inexistent', () => {
    const actual = cookies.get('inexistent');
    const expected = null;
    expect(actual).toBe(expected);
  });

});
