export class DroppableList extends HTMLElement {
  // Extend the HTMLElement class to create a custom web component
  constructor() {
    super();
    this._data = [];
    // Initialize the internal list of items to an empty array
  }

  // Setter for the data property
  set data(val) {
    this._data = val;
    this.render();
    // Set the internal list of items and call the render method
  }

  // Getter for the data property
  get data() {
    return this._data;
    // Return the internal list of items
  }

  // Lifecycle method called when the element is added to the DOM
  connectedCallback() {
    this.addEventListener('drop', this.handleDrop);
    // Listen for the 'drop' event and call the handleDrop method when it occurs
  }

  // Lifecycle method called when the element is removed from the DOM
  disconnectedCallback() {
    this.removeEventListener('drop', this.handleDrop);
    // Remove the event listener when the element is removed from the DOM
  }

  // Method called when an item is dropped on the element
  handleDrop(event) { 
    event.preventDefault();
    // Prevent the default behavior of the browser when an item is dropped on the element
    const data = event.dataTransfer.getData('text');
    // Get the data that was transferred with the dropped item
    this._data.push(data);
    // Add the data to the internal list of items
    this.render()
  }

  // Method to render the list of items
  render() { 
    const list = this._data.map(item => `<li>${item}</li>`).join('');
    // Create a string of <li> elements for each item in the list
    this.innerHTML = `<ul>${list}</ul>`;
    // Set the inner HTML of the element to the list of <li> elements
  }
}

customElements.define('droppable-list', DroppableList);
// Register the droppable-list web component with the browser
