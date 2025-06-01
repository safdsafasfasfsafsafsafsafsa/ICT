// // 심벌
// const sym1 = Symbol();
// const sym2 = Symbol();

// console.log(sym1 === sym2); // false

// const sym3 = Symbol("hi"); // 심벌의 설명
// console.log(sym3.description);

// // ex1
// let carA = {
//   id: 1,
//   name: "morning",
//   brand: "kia",
//   price: 1000,
// };

// // carA.id = 300; // 속성이 뭔지 모르고 추가하다 오버라이드 발생

// const idSym = Symbol("id");
// carA[idSym] = 300; // 원래 있던 속성을 덮지 않고 유니크한 값 부여

// console.log(carA);

// // ex2
// const idSym = Symbol("id");
// let carA = {
//   id: 1,
//   name: "morning",
//   brand: "kia",
//   price: 1000,
//   [idSym]: 300,
// };

// for (const key in carA) {
//   console.log(key); // 심벌은 for...in 문에서 제외됨
// }

// console.log(Object.getOwnPropertyNames(carA)); // 심벌은 getOwnPropertyNames 문에서 제외됨
// console.log(Object.getOwnPropertySymbols(carA)); // 심벌은 getOwnPropertySymbols 문에서 확인 가능

// ----------------------------------------------------------------

// // synbol.for: 전역 심볼, 같은 description이면 동일한 값
// console.log(Symbol.for("id") === Symbol.for("id")); // true

// // description을 이용해 심볼을 찾음
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // 심볼을 이용해 description을 얻음
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2)); // id

// --------------------------------------------------------

// const RED = "red";
// const ORANGE = "orange";
// const YELLOW = "yellow";
// const BLUE = "blue";
// const dog = "blue";

// function getImportantLevel(color) {
//   switch (color) {
//     case RED:
//       return "very important";
//     case ORANGE:
//       return "important";
//     case YELLOW:
//       return "little important";
//     case BLUE:
//       return "not important";
//     default:
//       console.log(`${color} not included`);
//   }
// }

// console.log(getImportantLevel(BLUE)); // not important
// console.log(getImportantLevel(dog)); // BLUE와 똑같은 값 출력

// 심벌 붙여 다른 값으로 취급
const RED = Symbol("red");
const ORANGE = Symbol("orange");
const YELLOW = Symbol("yellow");
const BLUE = Symbol("blue");
const dog = "blue";

function getImportantLevel(color) {
  switch (color) {
    case RED:
      return "very important";
    case ORANGE:
      return "important";
    case YELLOW:
      return "little important";
    case BLUE:
      return "not important";
    default:
      console.log(`${color} not included`);
  }
}

console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(dog)); // 심벌이 아니면 다른 값 취급

// --------------------------------------------------------

// class Car {
//   constructor() {
//     this.length = 0;
//   }
//   add(brand, name) {
//     this[brand] = name; // 배열 추가
//     this.length++;
//   }
// }

// let myCars = new Car();
// myCars.add("kia", "morning");
// myCars.add("hyundai", "tucson");
// myCars.add("genesis", "gv80");

// for (const car in myCars) {
//   console.log(car, myCars[car]); // 같이 출력되는 length를 제외하려면?
// }

// length를 심벌로 만들어 프로퍼티에서 빼기
const length = Symbol("length");
class Car {
  constructor() {
    this[length] = 0;
  }

  add(brand, name) {
    this[brand] = name;
    this[length]++;
  }
}

let myCars = new Car();
myCars.add("kia", "morning");
myCars.add("hyundai", "tucson");
myCars.add("genesis", "gv80");

for (const car in myCars) {
  console.log(car, myCars[car]); // 심벌은 for...in 문에서 제외됨
}

// -------------------------------------------------------------

// class AlertService {
//     constructor() {
//         this.alerts = {};
//     }

//     addAlert(symbol, alertText) {
//         this.alerts[symbol] = alertText;
//         this.renderAlerts();
//     }

//     removeAlert(symbol) {
//         delete this.alerts[symbol];
//     }

//     renderAlerts() { }
// }

// const alertService = new AlertService();

// class MyComponent {
//     constructor(thing) {
//         this.componentId = Symbol(thing);
//     }

//     errorHandler(msg) {
//         alertService.addAlert(this.componentId, msg);
//         setTimeout(() => {
//             alertService.removeAlert(this.componentId);
//             console.log('Removed alert', this.componentId);
//         }, 5000);
//     }
// }

// let list = new MyComponent('listComponent');
// let list2 = new MyComponent('listComponent');
// let form = new MyComponent('inputComponent');

// list.errorHandler('문제가 발생했습니다.');
// list.errorHandler('이러이러한 이유로 에러가 발생했습니다.');
