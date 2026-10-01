const { PORT } = require('../app');

describe('Application', () => {
  test('should use port 8000 by default', () => {
    expect(PORT).toBe(8000);
  });
});
