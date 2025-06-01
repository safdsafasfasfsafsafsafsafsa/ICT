const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let seconds = 0;
let tens = 0;
let interval;

// appendTens가 100이 되면 appendSeconds를 1 증가시킴
// appendTens는 0.01초 단위 -> setInterval 10 단위로 계산

buttonStart.onclick = function () {
  interval = setInterval(startTimer, 10); // 변수로 리턴시키기
};

buttonStop.onclick = function () {
  clearInterval(interval); // interval을 멈춤
};

buttonReset.onclick = function () {
  clearInterval(interval); // interval을 멈춤
  tens = 0; // tens 초기화
  seconds = 0; // seconds 초기화
  appendTens.innerHTML = 0; // appendTens 초기화
  appendSeconds.innerHTML = 0; // appendSeconds 초기화
};

function startTimer() {
  tens++;

  // tens가 9 이하면 appendTens 1 증가
  if (tens <= 9) {
    appendTens.innerHTML = tens;
  }
  // tens가 9 초과여도 appendTens 1 증가
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  // tens가 100이 될 때 초기화하기
  if (tens > 99) {
    console.log("seconds");

    seconds++; // seconds 1 증가
    appendSeconds.innerHTML = seconds; // appendSeconds 1 증가
    tens = 0;
    appendTens.innerHTML = "00"; // ten, appendTens 0으로 초기화
  }
}
