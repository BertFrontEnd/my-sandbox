const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

delay(1000).then(() => console.log('After 1 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchToDos() {
  console.log('Fetch todo started...');
  return delay(2000)
    .then(() => fetch(url))
    .then((response) => response.json());
}

fetchToDos()
  .then((data) => {
    console.log('Data: ', data);
  })
  .catch((e) => console.error(e));
