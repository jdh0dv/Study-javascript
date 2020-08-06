//Function
//fundamental buliding block in the program
//subprogram can be used multiple times
//performs a task of calculates a value



// 1. Function declaration (정의)
// function name(paaram1, param2) { body--- return; }
// one function === one thing : 하나의 함수는 한 가지의 일만 하도록
// naming : doSomething, command, verb : 커멘드, 동사형태로 이름 지정
// e.g. createCardAndPoint -> CreateCard, createPoint : 함수 세분화 여부 확인
// function is object in JS // 자바스크립트에서 function은 object로 간주
function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello@');
log(1234);



// 2. Parameters
// premitive parameters: passed by value (메모리에 값이 그대로 저장되어 있음)
// object parameters : passed by reference (메모리에 레퍼런스가 저장, 레퍼런스가 전달)
function changeName(obj){
    obj.name = 'coder';
}
const Ann = { name : 'Ann' };
changeName(Ann);
console.log(Ann);



// 2-1. Default parameters (add in ES6)
function showMessage(message, from = 'unkhown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');



// 2-2. Rest parameters (add in ES6) //... 세개 작성 -> 배열 형태로 전달
function printAll(...args){
    for (let i = 0; i <args.length; i++) {
        console.log(args[i]);
    }
    //args에 있는 값들이 하나하나씩 지정됨
    for (const arg of args){
        console.log(arg);
    }
    //배열에 있는 함수를 사용해도 괜찮음
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ann');



// 3. Local scope : 
// 블럭=밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let global = 'global'; //global variable
function printMessage() {
    let message = 'hello'; //지역변수, 안에서만 접근
    console.log(message); // local variable
    console.log(global);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello2';     
    }
}
printMessage();



// 4. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1, 2) //3
console.log(`sum: ${(sum(1,2))}`)