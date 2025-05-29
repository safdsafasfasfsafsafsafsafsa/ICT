// // 1. js에 프로퍼티 등록
// window.onload = function () {
//   // 문서가 load 될 때 이 함수 실행
//   let text = document.getElementById("text");
//   // 아이디가 "text"인 요소를 return 후 변경
//   text.innerHTML = "HTML 문서 loaded";
// };

// // 2. html 태그에 속성으로 등록

// // 3. addEventListener 메소드
// const aElement = document.querySelector("a"); // a 태그를 선택
// aElement.addEventListener("click", () => {
//   alert("a element clicked");
// });

// // 이벤트 객체 가져오기
// const buttonElement = document.querySelector(".btn");
// buttonElement.addEventListener("click", handleClick);
// function handleClick(event) {
//   let val;
//   val = event;

//   // Event target element
//   val = event.target;
//   console.log("val", val);
//   val = event.target.id;
//   console.log("val", val);
//   val = event.target.className;
//   console.log("val", val);
//   val = event.target.classList;
//   console.log("val", val);

//   // Event type
//   val = event.type;
//   console.log("val", val);

//   // 윈도우로부터의 거리 좌표
//   val = event.clientY;
//   console.log("val", val);
//   val = event.clientX;
//   console.log("val", val);

//   // 요소로부터의 거리 좌표
//   val = event.offsetY;
//   console.log("val", val);
//   val = event.offsetX;
//   console.log("val", val);
// }

// -------------------------------------------------------------------------------

// // CLICK EVENT
// const submitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector("form");
// const title = document.querySelector("h2");

// // addEventListener 메소드로 받아먹을 액션 계속 추가
// // Click
// submitBtn.addEventListener("click", handleEvent);
// // Doubleclick
// submitBtn.addEventListener("dblclick", handleEvent);
// // Mousedown
// submitBtn.addEventListener("mousedown", handleEvent);
// // Mouseup
// submitBtn.addEventListener("mouseup", handleEvent);
// // Mouseenter: 요소에 진입만 해도
// submitBtn.addEventListener("mouseenter", handleEvent);
// // Mouseleave
// submitBtn.addEventListener("mouseleave", handleEvent);
// // Mousemove
// container.addEventListener("mousemove", handleEvent);

// // Event Handler
// function handleEvent(e) {
//   e.preventDefault(); // 기본 동작 방지 (예: 폼 제출 시 페이지 새로고침 방지)
//   console.log(`EVENT TYPE: ${e.type}`);
//   title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`; // 요소로부터의 거리 좌표
// }

// -------------------------------------------------------------------------------

// FORM EVENT
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const title = document.querySelector("h2");

// Clear input
emailInput.value = "";
form.addEventListener("submit", handleEvent); // form 태그 안에 있는 submit 버튼을 호출하면 이벤트 핸들러가 실행됨

// Keydown
emailInput.addEventListener("keydown", handleEvent);
// keyup
emailInput.addEventListener("keyup", handleEvent);
// Keypress
emailInput.addEventListener("keypress", handleEvent);
// Focus
emailInput.addEventListener("focus", handleEvent);
// Blur (focus 하고 다른 곳 클릭하면...)
emailInput.addEventListener("blur", handleEvent);
// Cut (잘라내기 할 때)
emailInput.addEventListener("cut", handleEvent);
// Paste (붙여 넣기 할 때)
emailInput.addEventListener("paste", handleEvent);
// Input (input 요소 값이 달라졌을 때)
emailInput.addEventListener("input", handleEvent);

function handleEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  if (e.type === "submit") {
    e.preventDefault();
  }

  console.log(e.target.value);
  title.innerText = e.target.value; // h2 태그에 입력된 값을 출력
  // e.target.value는 이벤트가 발생한 요소의 현재 값을 가져옴
}
