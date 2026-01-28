//GET method
const todo = document.getElementById('todo-output');

async function getTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/77');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    todo.textContent =  json;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}

todo.textContent = 'Loading...';
getTodo();