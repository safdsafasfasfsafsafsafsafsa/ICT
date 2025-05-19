let foo = 42;
foo = true;
console.log(typeof foo);

const aa = "man";
const bb = 30;
const cc = true;
const dd = null;
const ee = undefined;

// array
const asd = ["ss", "dd"];
// object
const zxc = {
  province: "hell",
  city: "조이고",
};

console.log(typeof asd);
console.log(Array.isArray(asd));

// num to str
let val = String(111);
// bool to str
val = string(false);
// date to str
val = string(new Date());
// array to str
val = string([1, 2, 3, 4, 5]);
// str 변환
val = (5).toString();
// str to num, 위의 형태도 되며 1 아님 0으로 출력. 단 배열은 NaN(숫자 아님)
val = Number("1");
// 소수점 지우고 or 만들고 변환
val = parseInt("111.45");
val = parseFloat("111.45");

console.log(val);
console.log(typeof val);
console.log(val.length);

// js 자체적인 타입 변환
const v1 = string(1);
const v2 = 2;
const sum = v1 + v2;

console.log(sum);
console.log(typeof sum);
