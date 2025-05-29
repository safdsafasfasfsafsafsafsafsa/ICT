// // global this
// let a = "a";
// console.log(window);

// // 1. Method => object(객체)
// const audio = {
//   title: "a",
//   play() {
//     console.log("play this", this);
//   },
//   //   audio.stop
// };
// audio.play();

// audio.stop = function () {
//   console.log("stop this", this);
// };
// audio.stop();

// // 2. Function => Window Object
// function playAudio() {
//   console.log(this);
// }
// playAudio();

// ------------------------------------------------------------------------------

// 3. Constructor Function => {} (빈 객체 참조)

// function Audio(title) {
//   this.title = title; // 빈 객체(this)에 title이라는 속성을 추가
//   console.log(this);
// }
// const audio = new Audio("a");

// const audio = {
//   title: "audio",
//   categories: ["rock", "pop", "hiphop", "jazz"],
//   displayCategories() {
//     // 메소드의 this: 오브젝트
//     this.categories.forEach(function (category) {
//       // 함수의 this: 윈도우 오브젝트
//       console.log(`title: ${this.title}, category: ${category}`);
//     }, this); // 다시 메소드 this 참조해 title: "audio" 출력
//   },
// };
// audio.displayCategories(); // const 안에서 정의한 함수를 사용

// 4. 화살표 함수: 항상 상위 스코프의 this를 참조 (lexical this)
const audio = {
  title: "audio",
  categories: ["rock", "pop", "hiphop", "jazz"],
  displayCategories() {
    this.categories.forEach((category) => {
      console.log(this); // 상위의 this: 메소드
    });
  },
};
audio.displayCategories();
