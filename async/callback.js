'use strict';

//Javascript is synchronous. 자바스크립트는 동기적인 언어이다.
//Execute the code block by in order after hoisting. 호이스팅이 된 이후부터 코드가 작성순서에 맞춰 하나하나 동기적으로 실행됨
//hoisting : var, function declaration = var변수나 function선언들이 자동적으로 제일 위로 올라가는 것


//1. 동기와 비동기
// - 동기적 : synchonous
// - 비동기적 : asynchronuns = 비동기는 언제 코드가 실행될지 예측할 수 없는 것
// - 비동기 예시

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');



//2. 동기적 콜백과 비동기적 콜백
// synchronous callback (즉각적 실행)
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'))

// asynchronous callback (나중에 조건에 맞으면 실행)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);



// 3. 콜백지옥체험
// 콜백체인의 문제점 : 가독성이 떨어짐, 로직을 한눈에 이해하기 어려움, 디버깅시에도 문제분석에 어려움, 유지보수도 어려움

class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=> {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user,onSuccess,onError){
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({ name : 'ellie', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error =>{
                console.log(error);
            }
        )
    },
    error => {console.log(error)}
);