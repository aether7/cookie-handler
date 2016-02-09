# cookie-handler

Methods availables
- [get](#get)
- [set](#set)
- [remove](#remove)


### get

cookies.get(key [, markAsDeletable ]);

If you need to retrieve a cookie value from cookies, just give it the key as follows

````javascript
//cookie="foo=idunno; bar=firstValue"
var myValue = cookies.get('foo');
console.log('my value', myValue);//idunno
````


### set

cookies.set(key, value [, daysToExpire ]);

to set a value inside cookie, it is as easy as send it as follows

````javascript
cookies.set('coffeeType', 'mocha');
//cookie="foo=idunno; bar=firstValue; coffeeType=mocha"
````


### remove

cookies.remove(key);

````javascript
//cookie="foo=idunno; bar=firstValue"
cookies.remove('foo');
//cookie="bar=firstValue"
````
