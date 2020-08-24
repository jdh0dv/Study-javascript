// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringfy(obj) - overloading(오버로딩): 함수이름은 동일하지만 전달하는 파라미터에 따른 각각 다른 호출이 가능
// : 어떤 파일의 오브젝트를 받아와 스트링으로 변환, 콜백함수를 사용하여 세밀한 통제 가능
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json); //배열타입처럼 보임 --> 싱글이 아니라 더블쿼트로 표시(JSON 규격사항)

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json); //스트링으로 변환, 점프라는 함수는 포함X (함수는 오브젝트에 있는 데이터 아니기 때문에)

//배열형식으로 나열
json = JSON.stringify(rabbit, ['name','color','size']); 
console.log(json);

//콜백함수 이용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'ann' : value;
})
console.log(json);


// 2. JSON to Object
// parse : JSON에 스트링타입을 넣으면 어떤 파일의 오브젝트로 변환이 되고, 옵셔널 타입의 콜백함수 (결과값 변형)
console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump(); 변환한 object는 스트링으로 만들어진() JSON으로부터 오브젝트를 만들었기 때문에 함수는 포함이 되어 있지 않았음, 다시 함수를 만들어줘야함

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); birthDate는 string이기 때문에 오류가 남
console.log(obj.birthDate.getDate());




