//Task 1
function add(a,b) {
    return a+b
}
//Task 2
function subtract(a,b) {
    return a-b
}
//Task 3
function multiply(a,b) {
    return a*b
}
//Task 4
function divide(a,b) {
    if(b!=0) return a/b
    else throw "Divisble by Zero Error"
}
//Task 5
function remainder(a,b) {
    return a%b
}

function activity1(){
    let res =add(2,3)
    console.log("Addition: " + res)
    res =subtract(10,2)
    console.log("Subtraction: " + res)
    res =multiply(2,3)
    console.log("Multiplication: " + res)
    res =divide(15,2)
    console.log("Divison: " + res)
    res =remainder(15,4)
    console.log("Remainder:" + res)
}

function activity2(){
    //Task 6
    let a = 10
    a+=7
    console.log("Result 1: " + a)

    //Task 7
    let b = 25
    b-=7
    console.log("Result 2: " + b)
}

function activity3(){
    let x = 10
    let y = 7
    console.log("X = " + x )
    console.log("Y = " + y )
    //Task 8
    console.log("X > Y :" + (x > y))
    console.log("X < Y :" + (x < y))
    //Task 9
    console.log("X >= Y :" + (x>=y))
    console.log("X <= Y :" + (x<=y))
    //Task 10
    console.log("X == Y :" + (x==y))
    console.log("X === Y :" + (x===y))
}

function activity4(){
    let score1 = 95
    let score2 = 80
    console.log("Maths : " + score1 + ", Science : " + score2)
    if(score1>=50 && score2>=50) console.log("Passed in Maths & Science") //Task 11
    else if(score1>=50 || score2>=50) console.log("Passed in one subject") //Task 12
    if(!(score1==100) && !(score2==100)) console.log("Didn't get the perfect score 100!") //Task 13
}

function activity5(){
    let num=10
    let s1 = "Positive"
    let s2 = "Negative"
    let res = (num>0) ? s1 : s2
    console.log(res);//Task 14
}
activity1()
activity2()
activity3()
activity4()
activity5()