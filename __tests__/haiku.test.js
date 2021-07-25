import Haiku from '../src/js/haiku.js';

describe ('Haiku', () => {
  
  test('should determine wheter or not a passage is a haiku using three lines of text', () => {
    const haiku = new Haiku(5, 7, 5);
    expect(haiku.line1).toEqual(5);
    expect(haiku.line2).toEqual(7);
    expect(haiku.line3).toEqual(5);
  });
});