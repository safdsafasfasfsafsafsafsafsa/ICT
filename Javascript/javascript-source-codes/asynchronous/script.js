// 프로미스
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // 비동기 요청
//     const success = true;
//     if (success) {
//       resolve("성공");
//     } else {
//       reject("실패");
//     }
//   });
// }

// fetchData()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// -------------------------------------------------------------

// // 프로미스 올
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// -------------------------------------------------------------

// // 프로미스 레이스: 여러 프로미스 중 가장 먼저 완료된 것을 반환
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// // Expected output: "two"

// ------------------------------------------------------

// // 원본
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response1) => response1.json()) // json 형태로 변환
//   .then((json1) => console.log(json1))
//   .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
//   .then((response2) => response2.json())
//   .then((json2) => console.log(json2))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("----모든 작업 끝----"));

// async/await
async function makeRequest() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse1 = await response1.json();
    console.log("jsonResponse1", jsonResponse1);

    const response2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
    const jsonResponse2 = await response2.json();
    console.log("jsonResponse2", jsonResponse2);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("---모든 작업 끝---");
  }
}

makeRequest();
