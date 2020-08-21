// async & await
// clear style of using promsie


// 1. async : async를 함수 앞에 쓰면 코드블럭이 자동으로 promise로 변환
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await : async가 붙은 함수안에서만 쓸 수 있음 (delay가 끝날때까지 기다려줌)
function delay(ms) {
    return new Promise ((resolve, reject) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);