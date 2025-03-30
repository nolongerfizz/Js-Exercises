// Count of vowels

// Set prompt
const prompt = require("prompt-sync") ();

function main() {

    // Ask for word
    let word = prompt("Enter a word: ")

    // Print out number of vowels
    console.log(vowelsCount(word));

function vowelsCount(word) {
    // Vowel list
    let vowels = ["a", "e", "i", "o", "u"]

    // Set counter
    counter = 0;

    // Count number of voewls
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter ++;
        }
    }
    return counter;
}
}
main ()