var assert = require('assert');

const getX = () => new Promise((resolve) => { setTimeout(() => { resolve(99); }, 200); });

describe('async test', () => {
  it('async/await', async function test() {
    const x = await getX();
    assert.strictEqual(x, 99);
  });
});
