var assert = require('assert'),
    basicAuthParser = require('../');

assert.deepEqual(basicAuthParser('Basic YWRtaW46cGFzc3dvcmQ='), {
  scheme: 'Basic',
  username: 'admin',
  password: 'password'
});

assert.deepEqual(basicAuthParser('Digest DEADC0FFEE'), {
  scheme: 'Digest'
});

assert.deepEqual(basicAuthParser('Basic YWRtaW46cGFzczp3b3Jk'), {
  scheme: 'Basic',
  username: 'admin',
  password: 'pass:word'
});
