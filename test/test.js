const assert = require('assert');
const sayHello = require('../src/index');

assert.strictEqual(sayHello(), 'Hello, DevOps!');
console.log('✅ Test passed');
