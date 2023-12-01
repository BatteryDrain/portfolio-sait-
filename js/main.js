const yearEl = document.getElementById('year');
const date = new Date().getFullYear();
console.log(date);
yearEl.textContent = date;

// Access the button element
const button = document.getElementById('myButton');
// Add an event listener to change the button's text when clicked
button.addEventListener('click', function() {
button.textContent = 'Button Clicked';
});
