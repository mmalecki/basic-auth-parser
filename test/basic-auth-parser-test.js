var assert = require('assert'),
    vows = require('vows'),
    basicAuthParser = require('../');

vows.describe('basic-auth-parser').addBatch({
  'When using `basic-auth-parser`': {
    'with a correct string input': {
      topic: basicAuthParser('Basic YWRtaW46cGFzc3dvcmQ='),
      'it should return parsed data': function (result) {
        assert.deepEqual(result, {
          scheme: 'Basic',
          username: 'admin',
          password: 'password'
        });
      }
    },
    'with a wrong scheme': {
      topic: basicAuthParser('Digest DEADC0FFEE'),
      'it should return parsed data': function (result) {
        assert.deepEqual(result, {
          scheme: 'Digest'
        });
      }
    }
  }
}).export(module);
