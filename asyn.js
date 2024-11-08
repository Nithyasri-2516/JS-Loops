//Async Function
// The async function allows us to write promise-based code as if it were synchronous. This ensures that the 
//execution thread is not blocked.

// Promise Handling: Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in
// a resolved promise.
const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));


// Await Keyword
// The await keyword is used to wait for a promise to resolve. It can only be used within an async block.

// Execution Pause: Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable
//  asynchronous code.

const get = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
get();
console.log(2);


function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 5000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}

display();
