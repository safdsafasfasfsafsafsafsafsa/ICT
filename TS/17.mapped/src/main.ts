type Properties = "A" | "B";

// 1. map
type qqq = {
  [P in Properties]: boolean; // 타입 순회하면서 속성 부여
};

type MyMap<T> = {
  [P in keyof T]: T[P];
  // [P in keyof T]: T[P] | null;
};
type MyNewType = MyMap<{ a: "a"; b: "b" }>; // { a: "a", b: "b" }

// 2. pick: 선택한 속성만 추출
type aaa = Pick<{ qwe: "a"; asd: "b"; zxc: "c" }, "qwe" | "asd">; // { qwe: "a", asd: "b" }

// T 안에 존재하는 프로퍼티의 키 값
type NewPick<T, Properties extends keyof T> = {
  // 프로퍼티 순회해 타입 부여, P를 검색해서 무슨 타입 받았는지 확인
  [P in Properties]: T[P];
};
type MyNewType1 = NewPick<{ qwe: "a"; asd: "b"; zxc: "c" }, "qwe">; // { qwe: "a" }

// 3. record: 키와 타입 따로 설정해 결합
type bbb = Record<string, boolean>; // { [x: string]: boolean }

type NewRecord<K extends keyof any, T> = {
  [P in K]: T;
};
const myNewRecord: NewRecord<string, number> = {};
myNewRecord.a = 10;
myNewRecord.b = 20;
