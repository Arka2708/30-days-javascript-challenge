function func() {
    throw new Error('This is an intentional error');
}

function task1(){
    try {
        func();
    } 
    catch (error) {
        console.error('An error occurred:', error.message);
    }
    
}
function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return numerator / denominator;
}

function task2(){
    try {
        const result = divide(10, 0); 
        console.log('Result:', result);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}
function task3(){
    try {
        console.log('Inside try block');
        throw new Error('An error');
        console.log('hi');
    } 
    catch (error) {
        console.log('Inside catch block');
        console.error('Caught an error:', error.message);
    } 
    finally {
        console.log('In finally block');
    }
}

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Custom Error';
    }
}

function err() {
    throw new CustomError('This is a custom error');
}
function task4(){
    try {
        err();
    } 
    catch (error) {
        if (error instanceof CustomError) console.error('Caught a custom error:', error.message);
        else console.error('An error occurred:', error);
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Validation Error';
    }
}

function validate(input) {
    if (input === null || input === undefined || input.trim() === '') {
        throw new ValidationError('Input cannot be empty');
    }
    return true;
}

function task5(){
    try {
        const userInput = '';
        validate(userInput);
        console.log('User input is valid');
    } 
    catch (error) {
        if (error instanceof ValidationError) console.error('Validation error:', error.message);
        else console.error('An unexpected error occurred:', error);
    }
}
function prom(){
return new Promise(function(resolve, reject) {
    setTimeout(function() {
        let x = Math.floor(Math.random() * 10) + 1;
        console.log('Task 6');
        if(x%2)resolve('Message from task after 2 seconds');
        else reject('Promise Rejected');
    }, 2000);
});
}
function task6(){
     let p = prom()
     p.then(function(message){
        console.log(message, "Task 6 completed! ")
    })
    .catch(function(error){
        console.error(error)
    })
}
async function task7(){
    const p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let x = Math.floor(Math.random() * 10) + 1;
            console.log('Task 7');
            if(x%2)resolve('Message from task after 2 seconds');
            else reject('Promise Rejected');
        }, 2000);
    });

    try {
        const result = await p;
        console.log(result,"Task 7 completed");
    } 
    catch (error) {
        console.error(error); 
    }
}
function task8(){
    fetch('https://potterapi-fedeperin.vercel.app/english')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data using Promises:', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}
async function task9(){
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/hi');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data using Async/Await:', data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
//task1()
//task2()
//task3()
//task4()
//task5()
//task6()
//task7()
task8()
task9()