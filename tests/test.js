const assert = require('chai').assert;
const generateKey = require('../index');

describe('#generateKey', () => {
  it('returns a string', () => {
    assert.isString(generateKey());
  });

  it('returns a string with six characters', () => {
    assert.lengthOf(generateKey(), 6)
  });

  it('returns two non-unique strings', () => {
    const key1 = generateKey();
    const key2 = generateKey();
    assert.notStrictEqual(key1, key2);
  })
})