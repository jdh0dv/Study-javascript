'use strict';

// 첫번째 자료구조
// Array 

// 1. Declaration (배열선언)
const arr1 = new Array(); // new keword 배열(Array) 선언
const arr2 = [1, 2]; // 대괄호를 이용, 데이터를 넣어 배열 선언

// Index를 기준으로 데이터가 저장
// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']); // 모양이 오브젝트에서 key를 가져올 때 처럼 배열은 인덱스에 해당하는 value를 가져올 수 있음
console.log(fruits['1']);
console.log(fruits['2']);
console.log(fruits[fruits.length -1]); // 배열의 제일 마지막에 있는 value를 찾을 때 --> 배열은 0부터 시작하기 때문에 총 길이의 -1을 하면 마지막을 받아 올 수 있음

// 3. Looping over an array
// print all fruits
// 첫번째 방법 : for 사용
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 두번째 방법 : for of 사용
for(let fruit of fruits){ // fruits이라는 변수에 fruits 안에 있는 값들을 순서대로 할당하면서 블럭 실행
    console.log(fruit);
}

// 세번째 방법 : forEach (콜백 함수를 받아옴) - API
fruits.forEach((fruit) =>  console.log(fruit));


// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);
// pop : removw an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning (앞에서부터 데이터를 넣음)
fruits.unshift('🍓','🍑');
console.log(fruits);
// shift  : remove an item from the beginning (앞에서부터 데이터를 삭제)
fruits.shift();
console.log(fruits);


// note!! shift, unshit are slower than pop, push
// splice : remove an item by index position
fruits.push('🍕','🍔','🌭');
console.log(fruits);
fruits.splice(1, 1); //원하는 인덱스만 지정, 몇개나 지울건지 작성하지 않으면 원하는 인덱스부터 모든 것을 지움
console.log(fruits);
fruits.splice(1, 1, '🍳','🧈'); //splice 한 후 원하는 데이터 추가 가능
console.log(fruits);

// concat : combine two arrays
const fruits2 = ['🧂','🥫'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf : 배열안에 해당하는 value의 순서를 리턴
// includes : 배열에 value가 있는지 없는지 t와f로 리턴
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍕'));
console.log(fruits.indexOf('🌭'));
console.log(fruits.indexOf('🥗')); //value가 없을 땐 -1로 출력
console.log(fruits.includes('🌭'));
console.log(fruits.includes('🥗'));

// lastIndexOf
console.clear();
//똑같은 value값을 추가한다면 (똑같은 값이 여러개 있을 경우)
fruits.push('🍕');
console.log(fruits);
console.log(fruits.indexOf('🍕')); //중복되는 값이 있으면 맨 앞에 있는 값의 index를 출력
console.log(fruits.lastIndexOf('🍕')); //indexOf와 반대로 맨 마지막에 있는 값의 index를 출력
