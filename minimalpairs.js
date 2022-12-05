import {findMinimalPairs} from './find-minimal-pairs.js'

const words = ["bat", "cat", "hat", "rat"];
const minimalPairs = findMinimalPairs(words);

// The map should contain the following minimal pairs:
// - bat and hat
// - cat and hat
// - rat and hat

export {
  findMinimalPairs,
  words
}
