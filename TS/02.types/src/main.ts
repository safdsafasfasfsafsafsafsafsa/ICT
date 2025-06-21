// boolean
let boolean: boolean;
let FBool: boolean = false;

// number
let num: number;
let integer: number = 6;
let float: number = 5.5;

// string
let str: string;
let first: string = "Doe";

// array
// 한 가지 타입만
let names1: string[] = ["john", "kim"];
let names2: Array<string> = ["asf", "fads"];
// 다중 타입
let arr1: (string | number)[] = ["sadf", 1, 2];
let arr2: Array<string | number> = ["sadf", 1, 2];
// 개짬뽕
let someArr: any[] = ["adf", 1, [], {}, true];
// 읽기 전용
let strArr: readonly string[] = ["a"];
let numArr: ReadonlyArray<number> = [1];

// tuple
let tu1: [string, number];
tu1 = ["a", 1];
let tu2: [number, string][];
tu2 = [
  [1, "asf"],
  [2, "asdf"],
];
let tu3: [string, number];
tu3 = ["a", 1];
tu3.push(3); // 메소드로 값 추가 가능
console.log(tu3);

// any: 서드 파티 라이브러리 받기
let any: any = "a";

// unknown: 모든 값 가능, 다른 곳에 값으로 전달 불가
let unknown: unknown = false;
let asf: boolean = unknown as boolean; // 그냥 이 타입이 맞다고 치자

// object: strict 따라 null 걸러냄
let obj: object = {};
let arr: object = [];
const obj1: { id: number; title: string } = {
  id: 1,
  title: "asd",
};

// union
let uni: string | number;
uni = "asdf";
uni = 24131;

// function: 무슨 값을 넣고 뱉을지 타입 정하기. 없으면 void
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y;
};
let func2: () => void;
func2 = function () {
  console.log("hi");
};

// null, undefined: strictNullChecks = false 두면 엄격한 널 체크 방지
// let df: number = undefined;
// let sdff: string = null;
// let sdffasdf: undefined = null;
let vd: void = undefined;

// void: 리턴 없는 함수.
function greeting(): void {
  console.log("sdf");
}
const hi: void = greeting();

// never: 항상 오류 내야 할 때, 함수 루프해 절대 리턴하지 않을 때, 빈 배열(push 할당 불가)
function throwError(): never {
  throw new Error("error");
}
function keepProcessing(): never {
  while (true) {
    console.log("asdf");
  }
}
const never: never[] = [];
