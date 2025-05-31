// // 1. Same Input => Same Output
// const add = (x, y) => x + y;
// console.log(add(10, 20));

// const fullName = (first, last) => `${first} ${last}`;
// console.log(fullName("John", "Ahn"));

// ----------------------------------------------

// // 2. No Side Effects
// const z = 1;
// const sum = (x, y) => x + y + z;
// console.log(sum(10, 20));

// // Impure Function Example
// let x = 0;
// const numberUp = () => x += 1;
// console.log(numberUp());
// console.log(x); // x가 변화

// const alphabetArray = ['A', 'B'];
// const addItemToArray = (originalArray, newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }
// console.log(addItemToArray(alphabetArray, 'C'));
// console.log(alphabetArray); // 위 작업 끝내면 배열에 C가 추가된 상태

// --------------------------------------------

// Impure to pure function: 외부에서 선언된 상태 수정 불가
let x = 0;
const pureNumberUp = (num) => (num += 1);
console.log(pureNumberUp(x));
console.log(x);

const alphabetArray = ["A", "B"];
const pureAddItemToArray = (originalArray, newItem) => {
  return [...originalArray, newItem]; // 배열의 값만 복사해 원본에는 영향 없음
};
console.log(pureAddItemToArray(alphabetArray, "C"));
console.log(alphabetArray);
