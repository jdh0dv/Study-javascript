const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

//반복적으로 계산되고 수행되는 일 --> 함수로 작성 --> 재사용 가능

//함수의 이름은 짧고 간결하고 직관적이게 작성
function add ( num1, num2 ){ //add라는 이름의 함수는 num1와 num2라는 2가지의 인자를 받아옴
    return num1 + num2;
}

function print (){ //인자는 우리가 정의한 아이로 직관적이게 작성하는 게 좋음
    console.log('print');
}

print(8,33);


function divide(num1, num2) {
    return num1 / num2 ;
}
function surprise(operator) {
    const result = operator(2,3); // divide를 호출한 것과 같음
    console.log(result);
}
surprise(divide);


const sum = add ( 3, 4 ); // num1에는 3이 지정, num2에는 4가 지정--> 7이라는 값이 리턴됨
console.log(sum)

const doSomething = add;
const result2 = doSomething (2 , 3);
console.log(result2)

