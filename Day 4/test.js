const prompt = require('prompt-sync')();
//Task 1
function task1(){
 for(let i=1;i<=10;i++){
    process.stdout.write(i + " ");
 }
 process.stdout.write("\n\n");
}

//Task 2
function task2(){
    console.log("5's Multiplication table-> ")
    for(let i=1;i<=10;i++){
        process.stdout.write(5*i + " ");
     }
     process.stdout.write("\n\n");
}

function activity1(){
    task1()
    task2()
}

//Task 3
function task3(){
  let sum=0
  let i=10
  while (i--) {
    sum+=i;
  }
  console.log("Sum from 1 to 10 : " + sum + "\n");
}

//Task 4
function task4(){
 let i=10
 while(i>0){
    process.stdout.write(i + " ")
    i--;
 }
 process.stdout.write("\n\n")
}
function activity2(){
    task3()
    task4()
}

//Task 5
function task5(){
 let i=1
 do {
    process.stdout.write( i + " ")
    i++;
 } while (i!=6);
 process.stdout.write("\n\n")
}

//Task 6
function task6(){
    let fact= parseInt(prompt("Enter a number to calculate its factorial: "))
    let ans=1
    do { 
       ans*=fact
       fact--;
    } while (fact>0);
    process.stdout.write("Factorial is-> "+ans+ "\n\n")
}

function activity3(){
    task5()
    task6()
}

//Task 7
function activity4(){
    for(let i=1; i<=5 ;i++){
        for(let j=1 ;j<=i;j++){
            process.stdout.write("* ")
        }
        process.stdout.write("\n");
    }
    process.stdout.write("\n");
}

//Task 8
function task8(){
    for(let i=1;i<=10;i++){
        if(i==5) continue;
        process.stdout.write(i + " ");
     }
     process.stdout.write("\n\n");
}

//Task 9
function task9(){
    for(let i=1;i<=10;i++){
        if(i==7) break;
        process.stdout.write(i + " ");
     }
     process.stdout.write("\n\n");
}
function activity5(){
    task8()
    task9()
}
activity1();
activity2();
activity3();
activity4();
activity5();