// 1.String concatenation (string 연속)
console.log('my' + 'cat'); //+기호를 사용해 문자열과 문자열을 합해 새로운 문자 생성 가능
console.log('1' + 2); //문자열에 숫자를 더하게 되면 숫자가 문자열로 변환되어 출력
console.log(`string literals: 1 + 2 = ${1 + 2}`); //``(백틱)기호를 사용하여 string literals 생성가능 : 줄바꿈을 하거나 중간에 문자를 추가해도 그대로 출력



// 2.Numeric operators (숫자 연산자)
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder 나머지값
console.log(2 ** 3); //exponentiation 거듭제곱



// 3. Increment and decrement operators (증감 연산자))
// 3-1. Increment
let counter = 2;
const preIncrement = ++counter; // preincrement : 변수 앞에 ++ 기호를 붙여주는 것 
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // postincrement : 변수 뒤에 ++ 기호를 붙여주는 것 
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 3-2. decrement
const preDecrement = --counter; // predecrement : 변수 앞에 -- 기호를 붙여주는 것 
// counter = counter - 1;
// preIncrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--; // postdecrement : 변수 뒤에 -- 기호를 붙여주는 것 
//postIncrement = counter;
//counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);



// 4. Assignment operators (할당 연산자)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// 5. Comparison operators (비교 연산자)
console.log(10 < 6); // A가 B보다 적다
console.log(10 <= 6); // A가 B보다 적거나 같다
console.log(10 > 6); // A가 B보다 크다
console.log(10 >= 6); // A가 B보다 크거나 같다



// 6. Logical operators(논리 연산자) : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; //=false

// 6-1. || (or), finds the first truthy value : 하나라도 해당값이 나오면 멈춤
console.log(`or: ${value1 || value2 || check()}`);

// 6-2. && (and), finds the first falsy value : 세개가 다 true가 되어야지 return함
console.log(`and: ${value1 && value2 && check()}`);

// &&는 간편하게 Null 체크할 때도 사용됨, object가 Null이면 false가 됨 -> 뒤에가 실행이 안됨
// nullableObject && nullableObject.something = nullableObject가 null이 아닐 때만 something을 받아 옴


function check(){
    for (let i = 0; i < 10; i ++) {
        //wasting time
        console.log('★');
    }
    return true;
}


// 6.3. ! (not) : 값을 반대로 바꿔줌 (변수 앞에 !을 붙임)
console.log(!value1);



// 7. Equality (동등 연산자) 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion : ==  type 상관없이 검사 (문자열안에 들어도 숫자를 인식함)
console.log(stringFive == numberFive); // == (type 상관없이) 똑같다
console.log(stringFive != numberFive); // != (type 상관없이) 똑같지 않다.

// === strict equality, no type conversion : === type 상관 O, 검사
console.log(stringFive === numberFive); // === (type 맞춰서) 똑같다
console.log(stringFive !== numberFive); // !== (type 맞춰서) 똑같지 않다

// === 로 검사하는 게 더 정확하다.

// object equality by reference : 같은 레퍼런스로 들어 있어도 서로 다른 오브젝트를 가리킴
const Ann1 = { name: 'Ann'};
const Ann2 = { name: 'Ann'};
const Ann3 = Ann1;
console.log(Ann1 == Ann2); //각각 다른 레퍼런스가 저장, 다름
console.log(Ann1 === Ann2); //똑같은 타입이든 아니든 각각 다른 레퍼런스가 저장, 다름
console.log(Ann1 === Ann3); 

// equality = puzzler
// 0, Null(empty 문자열), undefined는 false로 간주
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f



// 8. Consitional operators: if
// if, else if, else
const name = 'Ann';
if (name === 'Ann'){
    console.log('welcome, Ann!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log ('unkwnon');
}



// 9. Ternay operator: ?
// condition ? value1(true) : value2(false);
console.log(name === 'Ann' ? 'yes' : 'no');



// 10. Switch statement
// use for multiple if checks
// use for enum-like calue check
// use for multiple type checks in TS
// If에서 여러가지 else if를 쓸 때 
const browser = 'Firefox';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you');
        break;
    default:
        console.log('Same all');
        break;       
}



// 11. Loops
// while loop, while the condition is truthy, (무한대 반복)
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭 실행 후 조건이 맞는지 검사.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; contion; step) : 시작하는 문장, 컨디션, 어떤 스텝을 밟아나갈지
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops : 중첩 반복, CPU에 좋지 않음
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break(loop 완전 끝냄), continue(지금것만 skip 후 다음 step으로 넘어감) : loop를 끝낼 수 있음

// 1~10까지 숫자중 짝수만 출력
for (let i = 0; i < 11; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

// 1~10까지 출력되면서 8에서 멈춤
for (let i = 0; i < 11; i++){
    if (i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}