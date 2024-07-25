function task1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Task 1');
            resolve('Message from task1 after 2 seconds');
        }, 2000);
    });
}

function task2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let err = true;
            if (!err) {
                console.log('Task 2');
                resolve('Message from task2 after 2 seconds');
            } else {
                reject('Something went wrong in task2!');
            }
        }, 2000);
    });
}

function activity1(){
    let p1 = task1()
    p1.then(function(message){
        console.log(message, "Task1 completed! ")
    })
    let p2 = task2()
    p2.then(function(message){
        console.log(message, "Task2 completed! ")
    })
    .catch(function(error){
        console.log(error)
    })
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched data from server');
            resolve('Data from server');
        }, 1000);
    });
}

function task3() {
    fetchData()
    .then((data1) => {
        console.log('Processing', data1);
        return task1();
    })
    .then((data2) => {
        console.log(data2, ': Promise consumed from task1!');
        return task2();
    })
    .then((data3) => {
        console.log(data3, ': Promise consumed from task2!');
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
}

async function task4(){
    const p = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved successfully!');
        }, 2000);
    });

    const result = await p;
    console.log(result);
}
async function task5(){
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise was rejected!');
        }, 2000);
    });

    try {
        const result = await p;
        console.log(result);
    } 
    catch (error) {
        console.error(error); 
    }
}
function task6(){
    fetch('https://potterapi-fedeperin.vercel.app/en')
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
async function task7(){
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data using Async/Await:', data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
function activity4(){
    task6()
    task7()
}
function task8(){
    Promise.all([fetchData(), task1()])
    .then((values) => {
        console.log('All promises resolved:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });
}
function task9(){
    Promise.race([ fetchData(), task1()])
    .then((value) => {
        console.log('First promise resolved:', value);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });
}
function activity5(){
    task8()
    task9()
}
//activity1()
//task3()
//task4()
//task5()
//activity4()
//activity5()