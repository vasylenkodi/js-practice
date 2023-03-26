const s = 'ProofOfWork';
let indexOfSpace = s.indexOf(' ');
let indexOfSpaces = [0, indexOfSpace];
let count = 2;
let words = [s.slice(indexOfSpaces[0], indexOfSpaces[1])];
let lengthOfTheWords = [];
let lengthArray = [];
let numToSave;
let numToCompare;
if (indexOfSpace === -1) {
    // return s.length;
}
while (indexOfSpace < s.lastIndexOf(' ')) {
  indexOfSpace = s.indexOf(' ', indexOfSpace + 1);
  indexOfSpaces[count] = indexOfSpace;
  count += 1;
}
for (let i = 1; i < indexOfSpaces.length; i += 1) {
  words[i] = s.slice(indexOfSpaces[i] + 1, indexOfSpaces[i + 1]);
}
for (let i = 0; i < words.length; i += 1) {
  lengthOfTheWords[i] = words[i].length;
}
for (let i = 0; i < lengthOfTheWords.length; i += 1) {
  lengthArray[i] = lengthOfTheWords[i].length;
}

console.log(lengthOfTheWords);

for (let i = 0; i < lengthOfTheWords.length; i += 1) {
    for (let k = i + 1; k < lengthOfTheWords.length; k += 1) {
        numToCompare = lengthOfTheWords[i];
    if (numToCompare > lengthOfTheWords[k]) {
      numToSave = lengthOfTheWords[i];
      lengthOfTheWords[i] = lengthOfTheWords[k];
      lengthOfTheWords[k] = numToSave;
    }
  }
}

// console.log(words);
// console.log(indexOfSpaces);
// console.log(lengthOfTheWords.length);
console.log(lengthOfTheWords[0]);
// console.log(lengthArray);
console.log(lengthOfTheWords);

// [7, 4, 4, 3, 5, 5, 3, 5, 7];
