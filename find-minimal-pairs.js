export function findMinimalPairs(words) {
  // Create a map to store the minimal pairs we find
  const minimalPairs = new Map();

  // Loop through each word in the array
  for (const word1 of words) {
    // Loop through each other word in the array
    for (const word2 of words) {
      // Skip if the words are the same
      if (word1 === word2) continue;

      // Compare the words to see if they are minimal pairs
      let areMinimalPairs = true;
      for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
          if (i !== word1.length - 1) {
            areMinimalPairs = false;
            break;
          }
        }
      }

      // If the words are minimal pairs, add them to the map
      if (areMinimalPairs) {
        if (!minimalPairs.has(word1)) {
          console.log(minimalPairs)
          minimalPairs.set(word1, [])
        };
        minimalPairs.get(word1).push(word2);
      }
    }
  }

  // Return the map of minimal pairs
  return minimalPairs;
}
