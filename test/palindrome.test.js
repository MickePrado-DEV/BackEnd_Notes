const palindrome = require('../utils/for_testing').palindrome;

// eslint-disable-next-line no-undef
test('palindrome of a', () => {
  const result = palindrome('a');

  // eslint-disable-next-line no-undef
  expect(result).toBe('a');
});

// eslint-disable-next-line no-undef
test('palindrome of react', () => {
  const result = palindrome('react');

  // eslint-disable-next-line no-undef
  expect(result).toBe('tcaer');
});
// eslint-disable-next-line no-undef
test('palindrome of saippuakauppias', () => {
  const result = palindrome('saippuakauppias');

  // eslint-disable-next-line no-undef
  expect(result).toBe('saippuakauppias');
});
