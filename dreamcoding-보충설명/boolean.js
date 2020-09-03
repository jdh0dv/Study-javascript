// boolean = 참(true), 거짓(false)
// false : 0, -0, '', null, undefined  ---> 데이터가 없거나 비어있는 값 
// true : -1, 'Hello', empty array(텅텅 빈 배열 [])

let num;
if (num) {
    console.log('true!');
} else {
    console.log('false!');
}

// num 이라는 변수를 정의하고 값을 할당하지 않으면 undefined로 정의.

num && console.log(num); //and연산자(&&)는 앞에가 true가 되어야 실행