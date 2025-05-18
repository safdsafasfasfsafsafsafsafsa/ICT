// var: 함수 레벨 스코프
function func() {
  if (true) {
    var a = 1;
    console.log(a);
  }
  console.log(a);
}

// let/const: 블록 레벨 스코프
function func2() {
  if (true) {
    let a = 2;
    console.log(a);
  }
  console.log(a);
}

func();
func2();
