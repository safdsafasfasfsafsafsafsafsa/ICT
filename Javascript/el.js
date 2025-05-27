// 1. js에 프로퍼티 등록
window.onload = function () {
  // 문서가 load 될 때 이 함수 실행
  let text = document.getElementById("text");
  // 아이디가 "text"인 요소를 return 후 변경
  text.innerHTML = "HTML 문서 loaded";
};

// 2. html 태그에 속성으로 등록

// 3. addEventListener 메소드
const aElement = document.querySelector("a"); // a 태그를 선택
aElement.addEventListener("click", () => {
  alert("a element clicked");
});

// 이벤트 객체 가져오기
const buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", handleClick);
function handleClick(event) {
  let val;
  val = event;

  // Event target element
  val = event.target;
  console.log("val", val);
  val = event.target.id;
  console.log("val", val);
  val = event.target.className;
  console.log("val", val);
  val = event.target.classList;
  console.log("val", val);

  // Event type
  val = event.type;
  console.log("val", val);

  // 윈도우로부터의 거리 좌표
  val = event.clientY;
  console.log("val", val);
  val = event.clientX;
  console.log("val", val);

  // 요소로부터의 거리 좌표
  val = event.offsetY;
  console.log("val", val);
  val = event.offsetX;
  console.log("val", val);
}
