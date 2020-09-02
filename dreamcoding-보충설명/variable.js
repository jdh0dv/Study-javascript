//변수 정의 : let 사용, var도 가능하지만 let 추천 (hoisting 때문에)

//number(숫자), string(문자열), boolean(참,거짓), null(값이 없음), undefined(정의되지 않음), symbol
// -----> 위 타입 제외 모든 것이 object
//메모리에 변수를 위한 공간 창조, 해당 공간에 값을 할당
//변수의 이름은 자유롭게 만들 수 있음 -> 의미있는 이름을 지정하는 게 좋음

let number = 2;
let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);


// object : 배열, 리스트, 함수 등등
// 한 두가지 이상의 큰 데이터가 들어 있음 --> 변수에 모두 담을 수 없음
// 각각 key마다 공간이 할당이 됨. 이들을 묶어서 가르키는 주소만 obj라는 변수에 할당

let obj = {
    name : 'ellie',
    age : 29,
};

// obj 오브젝트의 'name'이라는 key값을 찾을 때 -> obj.name
console.log(obj.name)

// obj2라는 변수에 새로운 메모리 공간 생성, 변수를 할당할 땐 무조건 그 변수의 값이 복사되어 들어옴
let obj2 = obj;
console.log(obj2.name)

obj.name = 'james';
console.log('----------')
console.log(obj.name)
console.log(obj2.name)


// const(상수변수) : 한번 선언 후 절대로 변경이 불가 --> 에러 발생
// const로 obj를 선언했을 경우 ---> obj 변수에는 다른 값이 할당 안됨  ---> 자체 레퍼런스 값 변경 불가
// obj 안에 레퍼런스가 가리키고 있는 key값은 변경 가능
// 상수변수는 그 자체만 변경불가!