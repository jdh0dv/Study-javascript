//함수 기본
//함수 타입
//1. 어떤 기능을 수행하고 그냥 끝나는 타입
//2. 어떤 계산을 한 다음 특정한 값을 전달하는 타입


//1. 함수 선언 : function 키워드 이용, 함수의 이름 작성, 괄호안에 함수에 어떤 값을 전달받아올 것 인지 인자정의, 실제로 함수안에서 어떤 코드들이 작동하는지 작성
function doSomething(add){
    console.log(add);
}

function add(a , b){ //특정한 인자값을 가져와 수행
 const sum = a + b;
 return sum; //계산한 값 전달 -> add라는 함수는 1과 2라는 값을 전달, 더해진 값이 리턴
}


//2. 함수 호출
doSomething(add); //함수의 이름만 넣어서 전달
doSomething(add(1,2));
const result = add(1,2); // 단순 호출된 값을 변수에 저장
console.log(result);