// document.addEventListener("click", (e) => {});

// document.addEventListener("keypress", (e) => {});

// document.addEventListener("submit", (e) => {});

interface MyMouseEvent {
  x: number;
  y: number;
}
interface MyKeyboardEvent {
  key: string;
}

// 이벤트 타입을 인터페이스로 저장
interface MyEventObjects {
  click: MyMouseEvent;
  keypress: MyKeyboardEvent;
}

// K가 항상 투입 가능하다고 알려서 오류 없애기
function handleEvent<K extends keyof MyEventObjects>(
  eventName: K,
  callbackFunc: (e: MyEventObjects[keyof MyEventObjects]) => void
) {
  if (eventName === "click") {
    callbackFunc({ x: 0, y: 0 });
  } else if (eventName === "keypress") {
    callbackFunc({ key: "Enter" });
  }
}

handleEvent("click", (e) => {});
handleEvent("keypress", (e) => {});
