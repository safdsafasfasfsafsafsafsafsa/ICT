// // Iterator Example
// function makeIterator(numbers) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < numbers.length
//         ? { value: numbers[nextIndex++], done: false }
//         : { value: undefined, done: true };
//     },
//   };
// }

// // 숫자 배열 생성
// const numbersArr = [1, 2, 3];
// // 이터레이터에 숫자 배열 넣어주기
// const numbersIterator = makeIterator(numbersArr);

// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next()); // 호출마다 카운터가 오름. 마지막은 undefined, done: true

// //  Symbol.iterator
// const numbersArr = [1, 2, 3];

// const numbersIterator = numbersArr[Symbol.iterator]();
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());

// ------------------------------------------------------------------

// // Iterable Object
// const numbersIterable = [1, 2, 3];
// const numbersNotIterable = { a: 1, b: 2 };
// console.log(typeof numbersIterable);
// console.log(typeof numbersNotIterable);
// for (const n of numbersNotIterable) {
//   console.log(n); // for...of 문은 iterable 객체에서만 동작합니다.
// }

// // 이터러블 구분
// const arr = [1, 2, 3, 4];
// const set = new Set([1, 2, 3, 4]);
// const map = new Map([
//   ["a", "1"],
//   ["b", "2"],
// ]);
// const obj = { a: 1, b: 2 }; // 이건 iterable이 아님

// console.log(arr[Symbol.iterator]());
// console.log(set[Symbol.iterator]());
// console.log(map[Symbol.iterator]());

// console.log(arr[Symbol.iterator]().next());
// console.log(set[Symbol.iterator]().next());
// console.log(map[Symbol.iterator]().next());

// -------------------------------------------------------------

// // Generator Example
// function* sayNumbers() {
//   yield 1; // 제너레이터 함수 일시정지, return과 유사
//   yield 2;
//   yield 3;
// }

// const number = sayNumbers();

// console.log(number.next()); // 1 반환
// console.log(number.next()); // 2 반환
// console.log(number.next()); // 3 반환
// console.log(number.next()); // undefined 반환, done: true

// function* generatorFunction() {
//   yield 1;
// }

// const generator = generatorFunction(); // 제너레이터: 제너레이터 함수의 반환.

// console.log(generator === generator[Symbol.iterator]()); // 제너레이터는 자신의 이터레이터 반환과 동일

// // ID Creator: 필요할 때만 인덱스 증가.
// function* createIds() {
//   let index = 1;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.return(10)); // 밸류 강제 변환

function* generatorFunction() {
  //   for (const number of [1, 2, 3]) {
  //     yield number;
  //   }
  yield* [1, 2, 3]; // 배열로 표현
}

const generator = generatorFunction();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
for (const number of generator) {
  console.log(number);
}
