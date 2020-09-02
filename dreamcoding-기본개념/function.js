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


// 5. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic...
        //업그레이드 유저라는 함수안에서 유저의 포인트가 10이상일 때만 동작하는 함수가 있다면
        //if문을 써서 ~~일때에 작성한다라고 작성-> 블럭 안에서 logic 작성시 가독성이 떨어짐
        //if와 else를 번갈아 쓰는 것 -> 부적합
    }
}

//good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
        //long upgrade logic...
        //조건이 맞지 않을 땐 (값이 undefinde, 0) 빨리 리턴을 해서 함수를 종료하고
        //조건이 맞을 때만 필요한 로직들 실행!
}



// 6. Function expression
// 펑션은 다른 변수와 마찬가지로 변수에 할당이 되고, 펑션에 파라미터로 전달,
// 리턴값으로 할당!
// 할당 된 다음부터 호출 가능!
// function declaration과 function expression의 가장 큰 차이점 = expression은 할당된 다음부터 호출 가능! declaration은 호이스팅 가능!
const print = function(){ //함수를 선언함과 동시에 바로 프린트라는 변수에 할당! 펑션에 아무 이름 X ==> 함수에 이름이 없는 것 anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 7. Callback Funtion using function expression
// 상황에 맞으면 전달된 함수를 불러!
// 두가지 이상의 콜백 펑션이 파라미터로 전달 
//정답, 정답이 맞으면 호출, 정답이 틀리면 호출
function randomQuiz(answer, printYes, printNo){ 
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous fuction
const printYes = function(){
    console.log('Yes!');
};

// named function
// 디버깅 할때 유용!
const printNo = function print(){
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// 8. Arrow function
// always anonymous
// 블럭 없이 한 줄로 작성
/// ---Arrow function으로 출력
const simplePrint = () => console.log('simplePrint!');



/// 9. IIFE : Immediately invoked function expression
// 선언함과 동시에 바로 호출하는 법-> 함수의 선언 괄호로 묶은 다음 (); 로 호출
(function hello(){
    console.log('IIFE');
})();