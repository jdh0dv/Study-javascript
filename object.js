// Objects
// onf of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 오브젝트는 키와 밸류의 집합체이다.


const name ='ann';
const age = '29';
print(name, age); //이름과 나이를 각각 파라미터로 전달
function print(name, age){ //함수에 두가지의 파라미터를 가져올 수 있도록 만듦
    console.log(name);
    console.log(age);
}

// 위 방법처럼 함수를 만들면 인자가 많아지면 추가해야하는 것들이 많아짐-> 관리힘듦
// 개선하고자 object를 씀


function printObject(person){
    console.log(person.name);
    console.log(person.age);
}

const ann = { name: 'ann', age: '29'};
printObject(ann);

// 하나의 프로퍼티 추가 및 삭제 가능 (뒤늦게 추가 및 삭제 가능) -->권장방법은 X
ann.hasJob = true;
console.log(ann.hasJob);

delete ann.hasJob;
console.log(ann.hasJob);



// 2. Computed properties (정확히 어떤 키가 필요할지 모를 때, runtime에서 결정될 때) --> 실시간으로 원하는 값을 받아오고 싶을 때
// key should be always string type!
console.log(ann.name); //.으로 접근 가능 (코딩하는 그 순간 해당하는 값을 받아오고 싶을 때)
console.log(ann['name']); //배열에서 데이터를 받아오는 것처럼 접근 가능
ann['hasJob'] = true;
console.log(ann.hasJob);



// 3. Property vales shorthand
const person1 = { name: 'bob', age: 20 };
const person2 = { name: 'steve', age: 22 };
const person3 = { name: 'dave', age: 24 };
const person4 = new Person('ann', 29);
console.log(person4);


// 4. Constructor Funtion
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}



// 5. in operator : 해당하는 object안에 키가 있는지 확인
console.log('name' in ann);
console.log('age' in ann);


console.clear(); //이전 콘솔 작업 지워짐


// 6. for..in vs for..of
// for (key in obj)
for (key in ann) { //앤이 가지고 있는 키들이 블럭을 돌 때마다 지역변수에 할당
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}


// 7. Cloning
const user = { name: 'ann', age: '20'};
const uesr2 = user;
uesr2.name = 'coder';
console.log(user);

const user3 = {};
Object.assign(user3, user);
console.log(user3);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 나오는 것일 수록 앞에 동일한 프로퍼티가 있다면 계속 덮어씌워짐

console.log(mixed.color);
console.log(mixed.size);