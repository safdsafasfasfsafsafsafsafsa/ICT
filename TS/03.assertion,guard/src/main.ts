// 타입 단언
// const bodyEl = document.querySelector("body") as HTMLBodyElement;
// bodyEl.innerText = "hello";

//  not null
// const bodyEl = document.querySelector("body");
// bodyEl!.innerText = "hello";

// 타입 가드
const bodyEl = document.querySelector("body");
if (bodyEl) {
  bodyEl!.innerText = "hello";
}

// 가드 2
// function aaa(arg: string | null) {
//   return (arg as string).toLowerCase();
// }
function aaa(arg: string | null) {
  if (arg) {
    return arg.toLowerCase();
  }
}
aaa("hello");
aaa(null);
