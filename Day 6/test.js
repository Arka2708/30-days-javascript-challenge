const prompt = require('prompt-sync')();

//Task 1
let arr
function task1(){
    arr = [1,2,3,4,5]
    console.log("Array: " + arr + "\n")
}

//Task 2
function task2(){
  console.log("First Element : " + arr[0])
  console.log("Last Element: " + arr[arr.length-1] + "\n")
}
function activity1(){
    task1()
    task2()
}

//Task 3
function task3(){
   arr.push(6)
   console.log("New Array after pushing 6 : " + arr + "\n" )
}
//Task 4
function task4(){
    arr.pop()
    console.log("New Array after popping one element : " + arr + "\n" )
}
//Task 5
function task5(){
   arr.shift()
   console.log("New Array after shifting : " + arr + "\n" )
}
//Task 6
function task6(){
    arr.unshift(7)
    console.log("New Array after unshifting : " + arr + "\n" )
}

function activity2(){
    task3()
    task4()
    task5()
    task6()
}

//Task 7
function task7(){
    let nums = arr.map((val) => {return val*2})
    console.log("Second Array with map : " + nums + "\n")
}
//Task 8
function task8(){
    let nums = arr.filter((val) => {return val%2==0 })
    console.log("Second Array with filter : " + nums + "\n")
}
//Task 9
function task9(){
    let sum = arr.reduce(function add(a,b){ return a+b })
    console.log("Sum of the numbers : " + sum + "\n")
}
function activity3(){
    task7()
    task8()
    task9()
}
//Task 10
function task10(){
    for(let a of arr){
      process.stdout.write(a + " ")
    }
    console.log("\n")
}

//Task 11
function task11(){
   arr.forEach(element => {
     process.stdout.write(element + " ")
   });
   console.log("\n")
}
function activity4(){
    task10()
    task11()
}
let nums
//Task 12
function task12(){
    nums =[[1, 2, 3],
           [4 , 5 , 6],
           [7, 8, 9]
          ]
    console.log(nums)
}
//Task 13
function task13(){
   let row=2,col=2
   console.log(nums[row][col])
}
function activity5(){
    task12()
    task13()
}

activity1()
activity2()
activity3()
activity4()
activity5()