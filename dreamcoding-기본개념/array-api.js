// Q1. make a string out of an array // 주어진 배열을 스트링으로 변환하라
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);

  }
  
  // Q2. make an array out of a string // 주어진 스트링을 배열로 변환하라
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(','); //구분자를 넣어야 배열로 변환, 아니면 하나로 인식
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); //배열 자체를 변화시키고, 배열 자체도 변환된 값을 리턴함
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 마지막 인덱스는 배제, +1로 계산
    console.log(result);
    console.log(array); // array는 동일 (변경x)
    // splice : array 자체를 변형 X, 새로운 배열을 만들어야함! --> slice
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
        //   const result = students.find(function (student) {
        //       return student.score === 90;
        //   });   Arrow펑션 쓰기 전 문법
      const result = students.find((student) => student.score === 90);
      //배열들의 요소마다 호출이 되고, 학생의 점수가 90점이면 true,
      //find: 첫번째로 true가 나오면 리턴해주는 API
      console.log(result);      
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      //map : 배열안에 있는 요소들을 원하는 함수를 이용해서 다른방식의 데이터를 만들 때 이용
      //콜백함수로 전달되는 인자는 최대한 이해하기 쉽게 네이밍
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();

      // some :  배열의 요소중 콜백함수가 리턴이 true가 되는게 있는지 없는지 확인
      const result = students.some((student) => student.score < 50);
      console.log(result);
      
      // every : 배열의 모든 요소들이 이 조건을 충족해야지만 true가 아니면 fales
      const result2 = !students.every((student) => student.score >= 50);
      console.log(result2);      
  }
  
  // Q9. compute students' average score
  {
      const result = students.reduce((prev, curr) => {
        //   console.log(prev);
        //   console.log(curr);
          return prev + curr.score;
      }, 0);
      console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88' //학생들의 모든 점수 스트링으로 변환
  {
      const result = students.map(student => student.score)
      .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
      .map(student => student.score)
     .sort((a, b) => a - b)
     .join();
     console.log(result);
  }