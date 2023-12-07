alert("HELLOWORLD!");
const yearEl = document.getElementById('year');
const date = new Date().getFullYear();
console.log(date);
yearEl.textContent = date;

// Access the button element
let indicator = 0
const button = document.getElementById('myButton');
button.textContent = "click me!"
//mouse over
button.addEventListener('mouseover', function(){
    document.getElementById('myButton').innerText = "clicked "+indicator+" times";
});
// Add an event listener to change the button's text when clicked
button.addEventListener('click', function() {
    button.textContent = "clicked "+indicator+++" times";
});
//mouse leave
button.addEventListener('mouseleave', function(){
    document.getElementById('myButton').innerText = "click me!";
});
//calculate
let mod = "even"
if (indicator % 2 == 1){
    mod = "odd";
};
document.getElementById("mod").innerText = mod;