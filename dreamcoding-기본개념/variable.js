//1. Use strict
//added in ES 5
//use this for valina Javascript.
'use strict';

//2. Variable -변수 : 변경될 수 있는 값, rw(read/write)
//let (added in ES6) 변수를 추가할 수 있는 함수 (그 전은 var)

//var (dont't ever ues this! 값을 선언하기 전에도 쓸 수 있음 이걸 'var hoistiong'이라고 부름
//Q.hositing은 무엇인가? A.어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것.
//또한 var는 block scope이 없음 = block을 무시



{
    let name = 'ann';
    console.log(name);
    name = 'hello';
    console.log(name);
}



//3. Contant - 변경불가능한 데이터 타입 (favor immutable data type always), r(read only) -선언함과 값을 할당한 이후로는 읽기만 가능
// use const whenever possible.
// only use let if variable needs to change.

// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

/////// NOTE ////////
//data type 구분
//1. Immutable data types (데이터 자체 변경 불가능) : primitive types, frozen objects
//2. Mutable data types: all objects by default are mutable in JS



//2-1. Variable types
// 메모리가 저장되는 방식 두 가지 : primitive type(값 자체가 메모리에 저장)/ object type(값 자체에 메모리 저장X, object를 가리키는 레퍼런스가 저장)
// primitive type : number, string, boolean, null, undefiedn, symbol
// object type : box container
// function : first-class function

const count = 17; //integer (정수)
const size = 17.1; //decimal number (소수점)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 2-1-1. number - special numeric values: infinity, -infinity, Nan

const infi = 10/0; //양수를 0으로 나눴을 때 (무한대)
const negainfi = -10/0; //음수를 0으로 나눴을 때
const nan = 'not a number'/10; //숫자가 아닌 것을 숫자로 나눴을 때

console.log(infi);
console.log(negainfi);
console.log('nan');

// 번외 bigInt(type값) : 아주 큰 범위의 숫자 --->크롬과 파이어폭스만 지원


// 2-2-2. string - 일반 문자타입 (한가지의 글자든 여러개의 글자든 + 기호 사용 가능)
const char ='c';
const ann ='Ann';
const greeting = 'hello' + ann;

console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${ann}!`; //template literals (변수의 값 자동적으로 붙여져서 나옴)

console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// 2-2-3. boolean (참과 거짓)
//false :0, bull, undefined, NaN, ''
//true: any other value

const canRead = true;
const test = 3<1; //false

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);


// 2-2-4. null = 개발자가 명확하게 텅텅 비어있는 값이야 하고 지정함
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);


// 2-2-5. undefined - 선언은 되었지만 값이 들어가 있지 않음
let x;
console.log(`value: ${x}, type:${typeof x}`);


// 2-2-6. Symbol - 나중에 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어나는 코드에서 우선순위를 주고 싶을 때 정말 고유한 식별자가 필요할 때 

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//주어진 스트링에 맞는 심볼을 만들어줘!
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4); 

//심볼은 바로 출력하면 에러, description을 추가해서 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


//object, real-life object, data structure
const Anne = { name: 'Anne', age: 20};
Anne.age = 21;


//4.Dynamic typing : dynamically typed Language = 선언할 때 어떤 타입인지 선언x, 프로그램 동작시 할당된 값에 따라 타입이 변경될 수 있음
let text ='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`); //문자열과 숫자를 더했을 땐 string으로 타입 선언
text = '8' / '2';
console.log(`value: ${text}, type:${typeof text}`); // 문자열과 문자열에 연산자가 더해지고 해당 문자열 안에 숫자가 있을 땐 number로 타입 선언
console.log(text.charAt(0)); //에러 발생 (런타임으로)



