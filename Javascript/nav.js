let val;
const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

console.log("list", list);
console.log("listItem", listItem);

val = listItem;
val = list;

// 1. child nodes 반환
val = list.childNodes; // NodeList를 반환(line break도 포함됨-text로 나타남)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;
console.log("child", val);

// nodeType: 숫자로 검출되는 노드의 종류
// 1 - Element
// 2 - Attribute (미사용)
// 3 - Text node
// 8 - 주석   <!-- Comment Node -->
// 9 - Document itself
// 10 - Doctype

// 2. children element nodes 반환
val = list.children; // HTML Collection을 반환(line break 포함X)
val = list.children[1];
list.children[1].textContent = "Hi"; // 내부 조작

// First child
val = list.firstChild; // === list.childNodes[0]
val = list.firstElementChild; // text node를 포함 X

// Last child
val = list.lastChild; // === list.childNodes[list.childNodes.length - 1]
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // 부모 요소의 부모 요소

// // next sibling 반환
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // previous sibling 반환
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
console.log("val", val);

// // DOM Collection
// for (let node of list.childNodes) {
//     console.log(node); // 컬렉션 내의 모든 노드를 보여줍니다.
// }

// console.log(list.childNodes.filter) // undefined (filter 메서드가 없습니다.)

console.log(Array.from(list.childNodes).filter);
