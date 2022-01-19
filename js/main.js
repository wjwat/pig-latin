// const vowels = ["a", "e", "i", "o", "u"]
// function vowelCounter(text) {
//   vowels.forEach(function(vowel) {
//     if (text === vowel) {
//       return vowel;
//     }
//   });
// console.log(vowelCounter("a"));


const vowels = ["a", "e", "i", "o", "u"]

function vowelCounter(vowels, text) {
	let vowelCount = 0;
	for (let p = 0; p < text.length; p++) {
    for (let i = 0; i < vowels.length; i++) {
      if (vowels[i] === text[p].toLowerCase()) {
        vowelCount++;
				break;
      };
    };
  };
	return vowelCount;
};

const tests = ['a', 'A', 'cat', '*#$&#', 'cater', 'cats catered the event', 'CATS CATERED THE EVENT', 'CaTs CaTeReD tHe EvEnT'];

tests.forEach(function(item) {
	console.log(vowelCounter(vowels, item));
})

console.log(loopCount, '============')

//console.log(vowelCounter(vowels, "E"));


// Describe: vowelCounter();

// Test: "It recognizes a single vowel."
// Code: vowelCounter("a");
// Expected Output: 1

// Test: "It recognizes a single vowel regardless of case."
// Code: vowelCounter("A");
// Expected Output: 1

// Test: "It recognizes a single vowel in a word with multiple characters."
// Code: vowelCounter("cat");
// Expected Output: 1

// Test: "It ignores non-alphabetical characters since they can't be vowels."
// Code: vowelCounter("*&$92%");
// Expected Output: 0

// Test: "It recognizes multiple vowels in a single word."
// Code: vowelCounter("cater");
// Expected Output: 2

// Test: "It recognizes vowels in a multiple-word sentence."
// Code: vowelCounter("cats catered the event");
// Expected Output: 7

// Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
// Code: vowelCounter("CATS CATERED THE EVENT");
// Expected Output: 7

// Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
// Code: vowelCounter("CaTS CATEReD ThE EveNT");
// Expected Output: 7