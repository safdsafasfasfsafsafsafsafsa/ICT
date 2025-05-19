let val = document;

val = document.baseURI; // 절대 uri 반환
val = document.head; // <head> 태그 반환
val = document.body;
val = document.forms[0].id; // form 안에 든 요소 출력하기
val = document.scripts[0].getAttribute("src"); // 해당 태그의 src 값 출력

const headerContainer = document.getElementById("header-container"); // 전달한 id 가진 태그를 반환
headerContainer.textContent = "text C";
headerContainer.innerText = "inner T";
headerContainer.innerHTML = "<span>inner html</span>";

// headerContainer = document.getElementsByName('header-container')   // 전달한 name 가진 태그를 반환
// headerContainer = document.querySelector('.hello')   // 전달한 선택자에 맞는 첫번째 태그를 반환

const items = document.getElementsByTagName("list-group-item"); // 해당 태그 이름 가진 모든 태그를 배열로 반환

let lists = document.getElementsByTagName("li");
console.log(lists);
lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
  list.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)"); // 홀수를 회색으로
liOdd.forEach((li) => {
  li.style.background = "gray";
});
