
//Task 1
let x = document.getElementById('myElement');
x.textContent = 'Hi There!';

//Task 2
let y = document.getElementsByClassName('myClass');
for (let e of y) {
    e.style.backgroundColor = 'red';
}

//Task 3
let newDiv = document.createElement('div');
newDiv.id ='job'
newDiv.textContent = 'Need a Job ASAP!!';
document.body.appendChild(newDiv);

//Task 4
let ul = document.getElementById('Languages');
let list = document.createElement('li');
list.textContent = 'JavaScript';
ul.appendChild(list);

//Task 5
let z = document.getElementById('codechef');
z.remove()

//Task6
z = document.getElementById('atcoder');
let p = document.createElement('div');
p.textContent = 'Spoj';
z.appendChild(p);

let element = document.getElementById('atcoder');
if (element && element.lastElementChild) {
    element.removeChild(element.lastElementChild);
}

//Task 7
let img = document.getElementById('myImage');
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEn4x9ZxJFhR9HPQBJs7mNHbJmahWwG3aX-g&s"

//Task 8
z = document.getElementById('Languages');
z.classList.add('highlight');
z.classList.remove('highlight')

//Task 9
function changeParagraphText() {
    p = document.getElementById('myParagraph');
    p.textContent = 'Find me a job plz!';

}
document.getElementById('changeTextButton').addEventListener('click', changeParagraphText);

//Task 10
function changeBorderColor(event) {
    event.target.style.borderColor = 'red'; 
}

function resetBorderColor(event) {
    event.target.style.borderColor = 'black'; 
}
x = document.getElementById('job');
x.addEventListener('mouseover', changeBorderColor);
x.addEventListener('mouseout', resetBorderColor);

