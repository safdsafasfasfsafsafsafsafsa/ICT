// 1
type AType<T> = T extends infer R ? R : null;

const a: AType<number> = 1; // a: number

// 2
type BType<T> = T extends { a: infer A; b: 1 } ? A : any;

type Inferred = BType<{ a: "hi"; b: 1 }>; // Inferred: "hi"

// 3
type CType<T> = T extends { a: infer A; b: infer B } ? A & B : any;

type InferredC = CType<{ a: { AProps: 1 }; b: { BProps: 2 } }>; // InferredC: { AProps: 1; } & { BProps: 2; }

// 4
type T0 = ReturnType<() => string>; // T0 = string
type T1 = ReturnType<(s: string) => void>; // T1 = void

function fn(str: string) {
  return str;
}

type T2 = ReturnType<typeof fn>; // T2 = string(함수가 스트링 반환)

// 5
type NewRT<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any; // T가 할당 가능하도록 R 추론
type MyRT = NewRT<() => number>; // MyRT: number
