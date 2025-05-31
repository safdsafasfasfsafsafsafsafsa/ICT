// // 기본 형태
// (
//     function () {
//         // Do fun stuff
//     }
// )()

// 1. 전역 선언, 외부 접근 차단
// (function () {
//   var aName = "Barry";
// })();
// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
// console.log(aName);
// // throws "Uncaught ReferenceError: aName is not defined"

// -------------------------------------------

// var result = (function () {
//   var name = "Barry";
//   return name;
// })();
// // 즉시 결과를 생성한다.
// console.log(result);
// // "Barry"

// -------------------------------------------

// function minus(a, b) {
//     return a - b;
// }

// function (a, b) {
//     return a - b;
// }

// // 2. 익명 함수: 변수와 함께 사용 or 즉시 실행
// const minus = function (a, b) {
//   return a - b;
// };

// (function (a, b) {
//   return console.log(a - b);
// })(1, 2);

// !function() { return console.log("hi") }()
// void function() { return console.log("hi") }()
// +function() { return console.log("hi") }()
// -function() { return console.log("hi") }()
// ~function() { return console.log("hi") }()
// *function() { return console.log("hi") }()
// ^function() { return console.log("hi") }()
// &function() { return console.log("hi") }();

// ------------------------------------------------

// 즉시 실행: 반복 호출해도 카운트 누적 유지
const increment = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`it is ${num} number`);
  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment);
increment();
increment();

// -------------------------------------------------

// // 즉시 실행: 반복 호출해도 카운트 누적 유지
// const Score = (() => {
//   let count = 0;
//   return {
//     current: () => {
//       return count;
//     },
//     increment: () => {
//       count++;
//     },
//     reset: () => {
//       count = 0;
//     },
//   };
// })();

// console.log(typeof Score);
// console.log(Score);

// Score.increment();
// console.log(Score.current());
// Score.increment();
// console.log(Score.current());
// Score.reset();
// console.log(Score.current());
