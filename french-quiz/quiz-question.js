// quiz-question.js

import React from "react";

class QuizQuestion extends React.Component {
  render() {
    return (
      <>
        <p>Translate the following word:</p>
        <p id="french-word"></p>
        <p>Select the correct English translation:</p>
        <form>
          <input type="radio" name="translation" value="Hello" id="hello">
          <label for="hello">Hello</label><br>
          <input type="radio" name="translation" value="Goodbye" id="goodbye">
          <label for="goodbye">Goodbye</label><br>
          <input type="radio" name="translation" value="Thank you" id="thank-you">
          <label for="thank-you">Thank you</label><br>
          <input type="radio" name="translation" value="How are you?" id="how-are-you">
          <label for="how-are-you">How are you?</label><br>
          <button type="button" onclick="checkAnswer()">Submit</button>
        </form>
        <p id="result"></p>
      </>
    );
  }
}

export default QuizQuestion;
