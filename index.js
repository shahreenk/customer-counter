let countEl = document.getElementById("countEl"); // saves #countEl element to a variable 
let saveEl = document.getElementById("saveEl"); // saves #saveEl element to a variable
let count = 0; // initializes count to 0

function increment() {
    count++; // adds one to the count
    countEl.textContent = count; // updates #countEl content with new count
}

function save () {
    let countStr = " " + count + " +"; // saves current count to a string
    saveEl.textContent += countStr; // adds the string to #saveEl element
    count = 0; // sets count back to zero
    countEl.textContent = count; // sets #countEl content back to 0
}