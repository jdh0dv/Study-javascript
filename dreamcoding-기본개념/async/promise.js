'use strict';

// Promise is a Javascript object for asynchronous operation.
// 1. state(상태), 2.producer(제공자)와 consumer(소비자)

// State : pending(진행중) -> fulfilled(완료) or rejected(거절)
// Producer vs Consumer


// 1. Producer
// when new Promise is created, the executor runs automatically
//promise를 만드는 순간 콜백함수 실행 ->프로미스 안에 네트워크 통신을 하는 코드를 작성하면 프로미스가 만들어지는 그 순간 네트워크를 실행
//-> 만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면(사용자가 버튼을 눌렀을 때) 사용자가 요구하지 않았는데도 불필요한 네트워크 통신이 일어남
//-> 프로미스를 만드는 순간 콜백함수가 실행되기 때문에 유의 
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000)
});


// 2. Consumer : then, catch, finally(성공실패여부와 상관없이 마지막에 수행)
// then : promise가 잘 정상적으로 수행되어서 최종적으로 콜백함수를 통해 전달한 값이 value에 파라미터로 전달
promise
 .then((value) => {
    console.log(value);
})
 .catch(error => {
    console.log(error);
})
 .finally(() => {
     console.log('finally');
 })


 // 3. Promise chaining
 // then, then, then : 여러가지를 묶어서 처리
 const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1),1000);
 })

 fetchNumber
 .then(num => num*2)
 .then(num => num*3)
 .then(num => {
     return new Promise((resolve, reject)=>{
         setTimeout(()=> resolve(num - 1), 1000)
     });
 })
 .then(num => console.log(num));


 // 4.Error Handling
const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve('🐔'),1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(() => reject(`${hen} => 🥚`),1000);
    });
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(`${egg} => 🍗`),1000);
    });        


getHen() //
.then(getEgg)
.catch(error =>{
    return '🥙';
})
.then(cook)
.then(console.log);
