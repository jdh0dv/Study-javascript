'use strict';
// object-oriendted programing
// class: templete
// object: instance of a class
// javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance - 문법상으로 편리한

// 1. Class declarations.
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ann = new Person('ann',20);
console.log(ann.name);
console.log(ann.age);
ann.speak();


// 2. Getter and stters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User ('Steve','Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon! (최근에 추가된 것, 아직 많이 쓰이진 않음 -- 사용하려면 바벨을 이용해야함)

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Inheritance (상속)
// a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

Of

//5. Class checking: instaceOf ->왼쪽의 오브젝트가 오른쪽의 클래스 인스턴스인지 아닌지 확인 -> t와 f 리턴
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);