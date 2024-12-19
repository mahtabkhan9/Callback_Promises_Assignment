function racePromises(promises) {
    return Promise.race(promises);
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 3000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 3 rejected"), 2000));

racePromises([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Output
// Promise 2 resolved