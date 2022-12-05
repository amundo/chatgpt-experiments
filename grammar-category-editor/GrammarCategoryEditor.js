class GrammarCategoryEditor extends HTMLElement {
  // Constructor
  constructor() {
    super();

    // Create a shadow root
    this.shadow = this.attachShadow({mode: 'open'});

    this.innerHTML += `<style>
    .container {
      padding: 20px;
      border: 1px solid #ccc;
    }
  
    .category-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .category {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .name,
    .value {
      flex: 1;
      padding: 8px 10px;
      border: 1px solid #ccc;
      margin-right: 10px;
    }
  
    .remove-button {
      padding: 8px 10px;
      border: 1px solid #ccc;
    }
    </style>`
    // Create a container element
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.shadow.appendChild(this.container);

    // Create the category list
    this.categoryList = document.createElement('ul');
    this.categoryList.classList.add('category-list');
    this.container.appendChild(this.categoryList);

    // Create a template for each category
    this.categoryTemplate = document.createElement('template');
    this.categoryTemplate.innerHTML = `
      <li class="category">
        <input type="text" class="name" placeholder="Category name">
        <input type="text" class="value" placeholder="Category value">
        <button type="button" class="remove-button">Remove</button>
      </li>
    `;

    // Add a "Add Category" button
    this.addButton = document.createElement('button');
    this.addButton.type = 'button';
    this.addButton.textContent = 'Add Category';
    this.addButton.addEventListener('click', () => this.addCategory());
    this.container.appendChild(this.addButton);
  }

  // Method to add a category
  addCategory() {
    // Create a new list item from the template
    const categoryItem = this.categoryTemplate.content.cloneNode(true);

    // Add event listeners to the "Remove" button
    const removeButton = categoryItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => this.removeCategory(categoryItem));

    // Append the new item to the list
    this.categoryList.appendChild(categoryItem);
  }

  // Method to remove a category
  removeCategory(categoryItem) {
    // Remove the item from the list
    this.categoryList.removeChild(categoryItem);
  }
}

// Define the web component
customElements.define('grammar-category-editor', GrammarCategoryEditor);
