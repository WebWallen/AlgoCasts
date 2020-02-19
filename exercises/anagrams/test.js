const anagramsWithHelperFun = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagramsWithHelperFun).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagramsWithHelperFun('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagramsWithHelperFun('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagramsWithHelperFun('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagramsWithHelperFun('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagramsWithHelperFun('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});
