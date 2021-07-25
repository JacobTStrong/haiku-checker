export default class Haiku {
  constructor (line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  vowelCounter(line1, line2, line3) {
    let allLines = line1 + " " + line2 + " " + line3;
    let vowelCount = allLines.match(/[aeiouy]{1,2}/ig).length;
    return vowelCount;
  }
  silentECounter(line1, line2, line3) {
    let allLines = line1 + " " + line2 + " " + line3;
    let words = allLines.split(" ");
    let wordArray = [];
    
    words.forEach(function(word) {
      if (word[word.length -1] === "e") {
        let newWord = word.slice(0, -1);
        wordArray.push(newWord);
      } else {
        let newWord = word;
        wordArray.push(word);
      }
      
    });

    return wordArray.join(" ");
  }
}