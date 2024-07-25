//Task 1
function changeParagraphText() {
    p = document.getElementById('myParagraph');
    p.textContent = 'Find me a job plz!';

}
document.getElementById('changeTextButton').addEventListener('click', changeParagraphText);

//Task 2
function toggleVisibility(event) {
    event.target.style.visibility ="hidden";
}
document.getElementById('myImage').addEventListener('dblclick', toggleVisibility);

//Task 3 & Task 4
function changeBgColor(event) {
    event.target.style.backgroundColor= 'red'; 
}

function resetBgColor(event) {
    event.target.style.backgroundColor = 'green'; 
}
x = document.getElementById('job');
x.addEventListener('mouseover', changeBgColor);
x.addEventListener('mouseout', resetBgColor);

//Task 5 & Task 6
function e1(event){
    console.log("Key pressed: ", event.key);
}
function e2(event){
    const p = document.getElementById("para");
    p.textContent = event.target.value;
}
x =document.getElementById('input')
x.addEventListener("keydown", e1);
x.addEventListener("keyup", e2);

//Task 7 & Task 8
const form = document.getElementById("form");
const select = document.getElementById("select");
const p = document.getElementById("para2");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log("Form Data: ", data);
});

select.addEventListener("change", function() {
    p.textContent = `Language preferred: ${select.value}`;
});

//Task 9 & Task 10
const list = document.getElementById("Languages");
const addButton = document.getElementById("add");

list.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        console.log("Clicked item text: ", event.target.textContent);
    }
});

addButton.addEventListener("click", function() {
    const item = document.getElementById("lang");
    const t = item.value.trim();
    if(t !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = t;
        list.appendChild(newItem);
        item.value = "";
    } 
    else alert("Please enter a valid item text.");
});