import levenshtein from 'https://esm.sh/fast-levenshtein'

function findMinimalPairs(words) {
  // Import the Levenshtein distance library

  // Create an empty array to store the minimal pairs
  let minimalPairs = [];

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // Calculate the Levenshtein distance between the two words
      let distance = levenshtein.get(words[i], words[j]);

      // If the distance is 1 and the words are not the same, add them to the minimal pairs array
      if (distance === 1 && words[i] !== words[j]) {
        minimalPairs.push([words[i], words[j]]);
      }
    }
  }

  // Return the array of minimal pairs
  return minimalPairs;
}
