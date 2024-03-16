// Async JavaScript with Promise. basic implementation
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("jonas");

// Asyncronous Javascript with Async and Await
// A much cleaner solution

async function getTodos() {
  const res2 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data2 = await res2.json();
  console.log(data2);
}

getTodos();
