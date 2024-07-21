
function task1(){
    let name = "Arkajyoti";
    let age = 21;
    let message = `Hanji, kaise hai aap sab, my name is ${name} and I am ${age} years old.`;
    console.log(message);
}
function task2(){
let s = `Hanji, 
kaise hai aap sab!
Sab badhiya?`;
console.log(s);
}

function activity1(){
    task1()
    task2()
}

function task3(){
    let arr=[1,2,3,4,5]
    const [first, second] = arr;
    console.log(first); 
    console.log(second); 
}

let book ={
    title: "Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    year: 1882,
}

function task4(){
    const {title, author} = book;
    console.log(title);
    console.log(author);
}
function activity2(){
    task3()
    task4()
}
function task5(){
  let arr = [1,2,3,4,5]
  let newarr = [7,8,...arr]
  console.log(newarr)
}
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
function task6(){
   console.log(sum(1, 2, 3));        
}
function activity3(){
    task5()
    task6()
}

function product(a,b=1){
    return a*b;
}
function activity4(){
    let x = product(5,3)
    let y = product(7)
    console.log(x)
    console.log(y)
}

function task8(){
    const name = "Arkajyoti";
    const age = 21;
    const coder = {
        name,
        age,  
        greet() {
            console.log (`Hanji, kaise hai aap sab, my name is ${name} and I am ${age} years old.`);
        },
        updateAge(newAge) {
            this.age = newAge;
        }
    };
    console.log(coder);  
}
function task9(){
    const op = "x";
    const value = 7;
    const obj = {
        [op]: value,
        [`${op}PlusOne`]: value + 1,
        [`${op}TimesTwo`]: value * 2
    };
    console.log(obj);
}
function activity5(){
    task8()
    task9()
}

activity1()
activity2()
activity3()
activity4()
activity5()

