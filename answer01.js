function sumAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000);
}

// Example usage:
sumAsync(5, 3, (result) => {
    console.log(`Sum: ${result}`); // Sum: 8
});

// Output
// Sum: 8