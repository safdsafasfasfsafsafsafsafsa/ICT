// 1. 새로운 element 생성
const li = document.createElement("li");

// class 추가하기
li.className = "list-group-item";
// id 추가하기
li.id = "new-item";
// attribute(속성) 추가하기 -> name="New list item"
li.setAttribute("name", "New list item");
// 새로운 text node 생성하고 더하기
li.appendChild(document.createTextNode("New list item "));

// 새로운 link element 생성하기
const link = document.createElement("a");
// classes 추가하기
link.className = "alarm-item";
// icon html 추가하기
link.innerHTML = '<i class="bi-alarm"></i>';
// link를 li에 더하기
li.appendChild(link);

// li 를 ul의 자식으로 더하기
document.querySelector("ul.list-group").appendChild(li);

console.log(li);

// -------------------------------------------------------------------------------

// 2. li element 삭제하기
const listParent = document.querySelector("ul");
const list = document.querySelectorAll("li"); // 배열

listParent.removeChild(list[1]);

// 3. li element 교체하기
const oldElement = document.getElementById("A"); // id가 A인 기존 element
const newElement = document.createElement("span"); // 새로 교체할 span element
newElement.textContent = "Hi";
oldElement.parentNode.replaceChild(newElement, oldElement);
