const prompt = require('prompt-sync')();
//Task 1
function task1(){
    let num = parseInt(prompt('Enter a number: '));
    if(num > 0) console.log(`${num} is a positive number `)
    else if(num < 0 )  console.log(`${num} is a negative number `)
    else console.log(`The number is zero `)
}

//Task 2
function task2(){
    let age = parseInt(prompt('Enter your age: '));
    if(age>=18) console.log("You are eligible for vote")
    else console.log("You are not eligible for vote")
}

function activity1(){
    task1();
    task2();
}

//Task 3
function activity2(){
    let input = prompt('Enter three numbers: ');
    let numbers = input.split(' ').map(Number);
    let [a, b, c] =numbers
    if(a>b){
        if(a>c) console.log(`${a} is the largest number`)
        else console.log(`${c} is the largest number`)
    }
    else {
        if(b>c) console.log(`${b} is the largest number`)
        else console.log(`${c} is the largest number`)
    }
}

//Task 4
function task4(){
    let num = prompt('Enter a number between 1 to 7 : ')
    num = parseInt(num);
    switch (num) {
        case (1): 
             console.log('Monday'); 
             break;
        case (2): 
              console.log('Tuesday'); 
              break;
        case (3): 
              console.log('Wednesday'); 
              break;
        case (4): 
              console.log('Thursday'); 
              break;
        case (5): 
              console.log('Friday'); 
              break;
        case (6): 
               console.log('Saturday'); 
               break;
        case (7): 
               console.log('Sunday');
                break;
    
        default:
            console.log("Enter a value within 1 to 7!")
            break;
    }
}

//Task 5
function task5(){
    let score = prompt('Enter your score: ')
    switch (true) {
        case (score >= 80):
            console.log("Grade : A");
            break;
        case (score >= 70):
            console.log("Grade : B");
            break;
        case (score >= 60):
            console.log("Grade : C");
            break;
        case (score >= 50):
            console.log("Grade : D");
            break;
        case (score >= 40):
            console.log("Grade : E");
            break;
        default:
            console.log("Grade : F");
            break;
    }
}

function activity3(){
    task4()
    task5()
}

//Task 6
function activity4(){
   let x = parseInt(prompt('Enter a number: '))
   console.log((x%2==0) ? "Even Number" :  "Odd number")
}

//Task 7
function activity5(){
    let year = parseInt(prompt('Enter a year to check leap year : '))
    if((year%100==0)){
        if(year%400==0) console.log("Leap Year")
        else console.log("Not a Leap Year")
    }
    else if(year%4==0) console.log("Leap Year")
    else console.log("Not a Leap Year")
}

activity1();
activity2();
activity3();
activity4();
activity5();
