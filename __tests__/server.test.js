'use strict';
const { server } = require('../lib/server.js');
const supertester = require('./supertester.js');
// jest.mock()

const mockRequest = supertester(server);
// this is actually server.js > server
// (akin to server.start, we're doing server.server)

describe('web server', () => {
  it('should respond homepage to /', async () => {
    await mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
});

