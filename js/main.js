//alert("HELLOWORLD!");
const yearEl = document.getElementById('year');
const date = new Date().getFullYear();
console.log(date);
yearEl.textContent = date;

// Access the button element
let indicator = 0;
const button = document.getElementById('myButton');
button.textContent = "click me!"
//mouse over
button.addEventListener('mouseover', function(){
    document.getElementById('myButton').innerText = "clicked "+indicator+" times";
});
// Add an event listener to change the button's text when clicked
button.addEventListener('click', function() {
    indicator++
    if (indicator == 1){
        button.textContent = "clicked "+indicator+" time";
    }
    else{
        button.textContent = "clicked "+indicator+" times";
    };
    /* ternary operator
    button.textContent = (indicator == 1) ? "clicked "+indicator+" time" : "clicked "+indicator+" times";*/
    //calculate
    let mod = "odd";
    if (indicator % 2 === 0){
        mod = "even";
    };
    document.getElementById("mod").innerText = mod;
});
//mouse leave
button.addEventListener('mouseleave', function(){
    document.getElementById('myButton').innerText = "click me!";
});
/*for loop
const list = document.getElementById('list');
for (let i = 1; i <= 100; i = i + 1) {
    let li = document.createElement("li");
    li.textContent = (i % 2 == 0) ? "even" : "odd";
    list.appendChild(li);
  };*/
  