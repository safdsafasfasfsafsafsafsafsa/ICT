// // 1. Call(); - 함수 this에 window 객체가 아닌 다른 객체를 전달
// const fullName = function () {
//   console.log(this.firstName + " " + this.lastName); // 상응하는 객체가 없어 undefined
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// // This will return "John Doe"
// fullName.call(person1);

// -------------------------------------------------------------------------------
// // 2. Call() with arguments
// const fullName = function (city, country) {
//   console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// fullName.call(person1, "Oslo", "Norway");

// -------------------------------------------------------------------------------
// // 3. Apply() with arguments
// const fullName = function (city, country) {
//     console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// fullName.apply(person1, ["Oslo", "Norway"]);

// -------------------------------------------------------------------------------
// 4. bind()
function func(language) {
  if (language === "kor") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕 ",
  engGreeting: "Hello ",
};

const boundFunc = func.bind(greeting); // 객체 바인딩만 하기 때문에 따로 변수 할당해야
boundFunc("kor");
boundFunc("eng");
