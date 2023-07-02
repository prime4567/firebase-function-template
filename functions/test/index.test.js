/**
 * First we need to install mocha, chai and their types with command:
 * npm install --save-dev @types/mocha @types/chai mocha chai
 */

// Initialize firebase
const test = require('firebase-functions-test')();

// after firebase-functions-test has been initialized
const myFunctions = require('../lib/index.js'); 

// Import mocha testing tool
const mocha = require('mocha');
const assert = require('assert');

// A fake request object, with req.query.text set to 'input'
const req = { query: {text: 'input'} };
// A fake response object, with a stubbed redirect function which asserts that it is called
// with parameters 303, 'new_ref'.
const res = {
  send: (message) => {
    console.log(message)
    assert.match(message.status, /OK/);
    //mocha.done();
  }
};

// Invoke addMessage with our fake request and response objects. This will cause the
// assertions in the response object to be evaluated.
myFunctions.getHelloWorld(req, res);