async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Example usage:
fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


// Output
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }