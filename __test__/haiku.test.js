import Haiku from '../src/js/haiku.js';

describe ('Haiku', () => {
  
  test('should determine wheter or not a passage is a haiku using three lines of text', () => {
    const haiku = new Haiku(5, 7, 5);
    expect(haiku.line1).toEqual(5);
    expect(haiku.line2).toEqual(7);
    expect(haiku.line3).toEqual(5);
  });
  
  test('should determine whether or not a pass contains 17 vowels', () => {
    const haiku = new Haiku("", "", "");
    let vowelNumber = haiku.vowelCounter("A world of dew And", "within every dewdrop", "A world of struggle");
    expect(vowelNumber).toEqual(17);
  });

  test('should identify words that end with an E, decapitate the E, and then return a new array of all words minus silent Es', () => {
    const haiku = new Haiku();
    let haikuWithoutEs = haiku.silentECounter("Home is where the heart", "is unless one has none where", "one should rightly live");
    expect (haikuWithoutEs).toEqual("Hom is wher th heart is unless on has non wher on should rightly liv");
  });
});
