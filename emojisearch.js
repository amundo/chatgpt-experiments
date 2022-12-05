// This is an array of objects representing different emojis
const emojis = [
  {
    name: "grinning face",
    emoji: "😀"
  },
  {
    name: "smiling face with heart-eyes",
    emoji: "😍"
  },
  {
    name: "face with tears of joy",
    emoji: "😂"
  },
  // Add more emojis here
];

// This function takes a search query and returns an array of matching emojis
function searchEmojis(query) {
  // Convert the query to lowercase for case-insensitive matching
  query = query.toLowerCase();

  // Use the filter() method to return only the emojis that match the search query
  return emojis.filter((emoji) => emoji.name.includes(query));
}

// This function takes an array of emojis and displays them on the page
function displayEmojis(emojis) {
  // Get the element where the emojis will be displayed
  const resultsElement = document.getElementById("results");

  // Clear the previous results
  resultsElement.innerHTML = "";

  // Loop through the array of emojis
  emojis.forEach((emoji) => {
    // Create a new element to display the emoji
    const emojiElement = document.createElement("div");

    // Set the content of the element to the emoji character
    emojiElement.innerText = emoji.emoji;

    // Add the emoji element to the results element
    resultsElement.appendChild(emojiElement);
  });
}

// This function is called when the user submits the search form
function onSearchFormSubmit(event) {
  // Prevent the form from submitting (which would refresh the page)
  event.preventDefault();

  // Get the element where the user entered their search query
  const inputElement = document.getElementById("search-input");

  // Get the search query from the input element
  const query = inputElement.value;

  // Search for emojis matching the query
  const results = searchEmojis(query);

  // Display the matching emojis on the page
  displayEmojis(results);
}

// Get the search form element
const searchForm = document.getElementById("search-form");

// Add an event listener to the search form that calls the onSearchFormSubmit()
// function when the form is submitted
searchForm.addEventListener("submit", onSearchFormSubmit);