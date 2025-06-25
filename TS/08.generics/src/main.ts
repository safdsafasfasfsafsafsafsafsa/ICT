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

// 내부 any 배제하기
interface Vehicle<T> {
  name: string;
  color: string;
  // option: any;
  option: T;
}

const car: Vehicle<{ price: number }> = {
  name: "car",
  color: "red",
  option: {
    price: 1000,
  },
};

const bike: Vehicle<boolean> = {
  name: "car",
  color: "red",
  option: true,
};

// 다중 매개변수
const makeArr1 = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const a1 = makeArr1<number, number>(4, 5);
const a2 = makeArr1<string, string>("a", "b");

// 객체 만들기: 필수 항목 정하고 새로운 것도 넣을 수 있도록
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

makeFullName({ firstName: "John", lastName: "Doe", location: "Seoul" }); // 새로운 항목 추가
