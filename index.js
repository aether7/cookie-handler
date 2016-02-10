var cookies = require('./src/cookie');
console.log(cookies);
cookies.set('name', 'george');
alert('hello world how are you ' + cookies.get('name'));
