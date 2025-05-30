// 1. What is closure?
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside"); // 변수에 할당되는 순간 바로 함수 호출, 매개변수의 설정 저장
newFunction("inside"); // 함수가 함수를 리턴: newFunction 변수는 함수.

// -----------------------------------------------------------------

// // 2. Example: 안 되는 이유?
// let a = "a";
// function functionB() {
//   let c = "c";
//   console.log(a, b, c); // 에러: b가 정의되지 않음
// }

// function functionA() {
//   let b = "b";
//   console.log(a, b); // 여기까진 b가 정의되어서 괜찮음
//   functionB();
// }

// functionA();

// ------------------------------------------------------------------

// 3. Example: 해결
let a = "a";
function functionA() {
  function functionB() {
    let c = "c";
    console.log(a, b, c);
  }
  let b = "b";
  console.log(a, b);
  functionB();
}

functionA();
