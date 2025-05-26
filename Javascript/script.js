// 프로퍼티 -----------------
let val;

val = document;
val = document.baseURI;
val = document.head; // Access the head of the document
val = document.body;

val = document.forms;
val = document.forms[0]; // Access the first form in the document
val = document.forms[0].id; // Get the ID of the first form
val = document.forms[0].className; // Get the class name of the first form

val = document.scripts[0].getAttribute("src"); // Get the source of the first script

console.log(val);

// Methods -------------------
const headerContainer = document.getElementById("header-container");
// headerContainer.style.display = "none"; // Hide the header container

console.log(headerContainer);

headerContainer.textContent = "Hello World"; // Change the text content of the header container
headerContainer.innerHTML = "<h1>Hello World</h1>"; // Change the inner HTML of the header container
// headerContainer.innerText = "inner";

// 속성 변경
const items = document.getElementsByClassName("list-group-item");
console.log(items);

items[0].style.color = "red"; // Change the color of the first item to red
items[1].textContent = "aaaa"; // Change the text content of the second item to "aaaa"

// 아이디로 접근
document.getElementsByTagName("li")[2].style.color = "blue"; // Change the color of the third list item to blue

// 배열
let lists = document.getElementsByTagName("li");
console.log(lists);

lists = Array.from(lists); // html을 배열로 변환

lists.forEach((list) => {
  list.style.color = "green"; // Change the color of each list item to green
});

lists.forEach((list, index) => {
  list.textContent = `${index}번째 리스트`; // Change the text content of each list item to its index
});

const liOdd = document.querySelectorAll("li:nth-child(odd)"); // Select the first odd list item

liOdd.forEach((li) => {
  li.style.background = "gray"; // Change the color of each odd list item to red
});
