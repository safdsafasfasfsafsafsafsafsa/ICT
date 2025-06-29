// 1
// type What = T extends U ? X : Y;
type Some = string;
type ConditionalType = Some extends string ? string : null; // Some이 string에 할당 가능한지 질문: 되면 str, 아니면 null

// 2
function fn1<T>(value: T) {
  const fn2 = (arg: T extends boolean ? "A" : "B") => {};
  return fn2;
}

const result = fn1("adsf"); // boolean이 아니므로 타입은 B

// 3
type StrOrNot<T> = T extends string ? string : never; // 반드시 스트링만 가능한 타입
type AUnion = string | boolean | never; // never는 유니언 불가

const A: StrOrNot<string> = "str";

// 4
// Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<"a" | "b" | "c", "a" | "b">; // 타입: "c"
/*
'a' extends 'a' | 'b' ? never : 'a' ==> never
'b' extends 'a' | 'b' ? never : 'b' ==> never
'c' extends 'a' | 'b' ? never : 'c' ==> 'c'
*/

// 5: 각각 비교하지 않고 통으로(함수, 튜플)
type AType<T> = T extends string | number ? T : never;
type MyResult = AType<string | number | boolean>; // 유니언 str, num만 남음

type AType1<T> = (() => T) extends () => string | number ? T : never;
type MyResult1 = AType1<string | number | boolean>; // s | b 한 덩어리로 계산 -> never

type AType2<T> = [T] extends () => [string | number] ? T : never;
type MyResult2 = AType2<string | number | boolean>; // s | b 한 덩어리로 계산 -> never
