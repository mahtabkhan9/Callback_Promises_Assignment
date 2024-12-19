function fetchMultipleData(urls) {
    const fetchPromises = urls.map((url) => fetch(url).then((response) => response.json()));

    return Promise.all(fetchPromises);
}

// Example usage:
const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleData(urls)
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Output
// [
//     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//     {
//         userId: 1,
//         id: 2,
//         title: 'quis ut nam facilis et officia qui',
//         completed: false
//     },
//     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
// ]