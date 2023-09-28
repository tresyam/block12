// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input elements
    var todoInput = document.getElementById('todo-input');
    var addButton = document.getElementById('add-button');
    var todoList = document.getElementById('todo-list');
  
    // Add event listener to the add button
    addButton.addEventListener('click', function() {
      var task = todoInput.value;
  
      // Create a new list item
      var listItem = document.createElement('li');
      listItem.className = 'todo-item';
  
      // Create a checkbox element
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // Create a text node with the task text
      var taskText = document.createTextNode(task);
  
      // Append the checkbox and task text to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
  
      // Append the list item to the todo list
      todoList.appendChild(listItem);
  
      // Clear the input field
      todoInput.value = '';
    });
  });
  