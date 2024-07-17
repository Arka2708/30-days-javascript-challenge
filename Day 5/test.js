const prompt = require('prompt-sync')();
//Task 1
function task1(){
   let num =parseInt(prompt("Enter a number: "))
   if(num%2==0) console.log(`${num} is Even`)
   else console.log(`${num} is Odd`)
}

//Task 2
function task2(num){
    return  (num*num)
}

function activity1(){
     task1()
     let num =parseInt(prompt("Enter a number: "))
     let square = task2(num)
     console.log(`Square is = ${square}`);
}

//Task 3
const task3 = function(){
    let a = 10
    let b = 7
    if(a>b) console.log(`${a} is maximum`)
    else console.log(`${b} is maximum`)
}

//Task 4
const task4 = function(){
    let s1 = "Chai"
    let s2 = "Code"
    return (s1+s2)
}

function activity2(){
    task3()
    let s = task4()
    console.log(`Concatenated String: ${s}`)
}

//Task 5
const task5 = (a,b) =>{
    return (a+b);
}

//Task 6
const task6 = (s,ch) =>{
   for(let i = 0 ;i<s.length;i++){
      if(s[i]==ch) return true;
   }
   return false
}

function activity3(){
    let sum =task5(2,7)
    console.log(`Sum : ${sum}`)
    let ans =task6("Chai Aur code" , 'u')
    console.log(`Occurence of that character in the string  : ${ans}`)
}

//Task 7
const task7 = (a,b=10) =>{
    return (a*b);
}


//Task 8
const task8 = (name , age=18) =>{
    let s = "Haanji Kaise hai " + name + " , umar to " + age + " saal ho gya"
    return s;
}


function activity4(){
    let product=task7(7,5)
    console.log(`Product is ${product}`)
    let message = task8("Arkajyoti", 21)
    console.log(message) 
}

//Task 9
function task9(task2,x){
    while(x>0){
        let s = task2(x)
        console.log(s)
        x--;
    }
}

//Task 10
function task10(task2,task5,x){
    let y =task2(x)
    let z =task5(y,x)
    console.log(`Result : ${z}`)
}

function activity5(){
    task9(task2,5)
    task10(task2,task5,7)
}

activity1()
activity2()
activity3()
activity4()
activity5()