// 오버로딩: 형태 같고 매개변수 다른 함수를 통합
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}

add("hello", "world");
add(1, 2);

// 배열식으로 개조하기
// function say(word: string): string {
//   return word;
// }
// say("wow");

// 1. or 분기
function say(word: string | string[]): string {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" "); // 공백 넣고 결합
  }
  throw new Error("unable"); // 리턴 없는 상황을 방지
}

say(["wow", "sans"]);

// 2. 오버로딩
function say2(word: string): string;
function say2(word: string[]): string;
function say2(word: any): any {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" "); // 공백 넣고 결합
  }
  throw new Error("unable"); // 리턴 없는 상황을 방지
}

say2(["wow", "sans"]);
