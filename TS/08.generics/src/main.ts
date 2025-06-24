// 여러 속성을 뭉뚱그리려면?
// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//   return arr.length;
// }
function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getArrayLength<number>(arr1); // 속성 후지정

const arr2 = ["a", "b", "c"];
getArrayLength<string>(arr2);

const arr3 = [true, false, true];
getArrayLength<boolean>(arr3);
