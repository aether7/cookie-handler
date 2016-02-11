# cookie-handler

Handle cookies in a easy way

Methods availables
- [get](#get)
- [set](#set)
- [remove](#remove)


### get

cookies.get(key [, markAsDeletable=false ]);

If you need to retrieve a cookie value from cookies, just give it the key:

````javascript
//document.cookie -> "foo=idunno; bar=firstValue"
var myValue = cookies.get('foo');
console.log('my value', myValue);//idunno

var otherValue = cookies.get('inexistent');
console.log(otherValue);//null
````

Also, you can just mark as deletable value(after it is recovered):

````javascript
//document.cookie -> "foo=idunno; bar=firstValue"
var myValue = cookies.get('foo', true);
console.log(myValue);//idunno

var otherValue = cookies.get('foo');
console.log(otherValue);//null
````


### set

cookies.set(key, value [, daysToExpire=365 ]);

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
