const dependency = require('./dependency.fixture');

it('checks dependency', () => {
  if (dependency.testShouldFail === true) {
    throw new Error('test failed');
  }
});
