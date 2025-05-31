// // 1. shallow copy 얕은 복사(주소만 복사하고 값은 복사하지 않음)
// const aArray = [1, 2, 3];

// // shallow copy with spread operator: 값만 가져오기
// const bArray = [...aArray, 4];
// console.log("aArray", aArray);
// console.log("bArray", bArray);
// console.log("aArray === bArray", aArray === bArray); // 배열/객체의 참조하는 위치가 다르므로 false

// // shallow copy with Object.assign()
// const cArray = Object.assign([], bArray);
// console.log("cArray", cArray);
// console.log("bArray === cArray", bArray === cArray); // 배열/객체의 참조하는 위치가 다르므로 false

// // Nested Arrays and Objects 중첩된 배열과 객체
// cArray.push([5, 6, 7]); // 배열 1234와 배열 567을 합침
// console.log("cArray", cArray);
// const dArray = [...cArray, 10];
// console.log("dArray", dArray);
// dArray[4].push(8); // dArray의 5번째 요소(배열)에 8을 추가 -> 5678
// console.log("cArray", cArray); // cArray는 얕은 복사이므로 내부 배열의 변경이 cArray에 영향을 미침
// console.log("dArray", dArray);

// // 2. 얕은 동결
// const aObject = {
//   a: "a",
//   b: "b",
//   cObject: { a: 1, b: 2 },
// };

// Object.freeze(aObject); // 얕은 동결: depth 1에서 속성 변경 불가
// aObject.a = "c";
// console.log("aObject", aObject);
// aObject.cObject.a = 3; // 얕은 동결이므로 cObject의 내부 속성은 변경 가능
// console.log("aObject", aObject);

// -------------------------------------------------------------------------------------

// 3. deep copy 깊은 복사(완전한 값 복사로 독립적인 객체 생성)
const aObject = {
  a: "a",
  b: "b",
  cObject: { a: 1, b: 2 },
};

// // deep copy with json.parse(json.stringify())
// const newAObject = JSON.parse(JSON.stringify(aObject));
// console.log("aObject", aObject);
// console.log("newAObject", newAObject);
// aObject.cObject.a = 3;
// console.log("aObject", aObject);
// console.log("newAObject", newAObject); // 저쪽이 값 변해도 영향 없음

// // deep copy with nested spread operator 전체에 얕은 복사로 깊은 복사 구현
// const newAObject = { ...aObject, cObject: { ...aObject.cObject } };
// console.log("aObject", aObject);
// console.log("newAObject", newAObject);
// aObject.cObject.a = 3;
// console.log("aObject", aObject);
// console.log("newAObject", newAObject);

// deep copy with lodash 라이브러리 사용
const newAObject = _.cloneDeep(aObject);
console.log("aObject", aObject);
console.log("newAObject", newAObject);
aObject.cObject.a = 3;
