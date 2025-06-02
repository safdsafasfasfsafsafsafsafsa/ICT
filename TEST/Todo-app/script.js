const buttonTodo = document.querySelector(".button-todo");
const todoActionRewriteAll = document.querySelectorAll(".todo-action__rewrite");
const todoActionDeleteAll = document.querySelectorAll(".todo-action__delete");
const todoList = document.querySelector(".todo-list");
let todoCounter = parseInt(localStorage.getItem("todoCounter")) || 0;
console.log("todoCounter:", todoCounter);

// 항목 생성, 수정, 삭제 --------------------------------------------------------------------

// 1. 새로운 Todo 항목 생성: json 데이터 유무로 분기
function addTodo(todo = null) {
  const todoAction = document.createElement("div");
  todoAction.classList.add("todo-action");

  todoCounter++;
  todoAction.classList.add(`todo-action-${todoCounter}`);

  // 체크박스 생성
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-action__checkbox");
  if (todo) {
    checkbox.checked = todo.completed;
  } else {
    checkbox.checked = false;
  }

  // 텍스트(label) 생성
  const text = document.createElement("label");
  text.classList.add("todo-action__text");
  if (todo) {
    text.textContent = todo.text;
  } else {
    text.textContent = "";
  }

  // 수정 버튼 (이미지) 생성
  const rewriteButton = document.createElement("img");
  rewriteButton.classList.add("todo-action__rewrite");
  rewriteButton.src = "todo-app/assets/pencil.svg"; // 수정 아이콘 경로
  rewriteButton.alt = "수정";

  // 삭제 버튼 (이미지) 생성
  const deleteButton = document.createElement("img");
  deleteButton.classList.add("todo-action__delete");
  deleteButton.src = "todo-app/assets/minus.svg"; // 삭제 아이콘 경로
  deleteButton.alt = "삭제";

  // 요소들을 todoAction에 추가
  todoAction.appendChild(checkbox);
  todoAction.appendChild(text);
  todoAction.appendChild(rewriteButton);
  todoAction.appendChild(deleteButton);

  // todoAction을 todoList에 추가
  todoList.appendChild(todoAction);
  console.log("추가");
}

// 2. Todo 항목 수정

// 3. Todo 항목 삭제
function deleteTodo(event) {
  if (event.target.classList.contains("todo-action__delete")) {
    const todoAction = event.target.closest(".todo-action");
    if (todoAction) {
      // HTML에서 삭제
      todoAction.remove();

      // 로컬스토리지에서 삭제
      deleteTodoFromLocalStorage(todoAction);
    }
  }
}

// 로컬 스토리지 --------------------------------------------------------------------------

// 현재 Todo 리스트를 localStorage에 저장: 추가/수정/삭제 직후?
function saveTodosToLocalStorage() {
  const todos = [];
  const todoActions = document.querySelectorAll(".todo-action");

  todoActions.forEach((todo) => {
    const checkbox = todo.querySelector(".todo-action__checkbox");
    const text = todo.querySelector(".todo-action__text");
    const counter = todo.classList[1].split("-")[2] - 1; // 클래스 이름에서 숫자 추출

    todos.push({
      text: text.textContent,
      completed: checkbox.checked,
      count: counter,
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoAndSave() {
  addTodo();
  saveTodosToLocalStorage();
}

function deleteTodoAndSave(event) {
  deleteTodo(event);
  saveTodosToLocalStorage();
}

// localStorage에서 Todo 리스트 불러오기
function loadTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log("Loaded todos:", todos);

  todos.forEach((todo) => {
    addTodo(todo);
  });
}

function deleteTodoFromLocalStorage(todoElement) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const classNum = todoElement
    .querySelector(".todo-action")
    .classList[1].className.split("-")[2];

  // 해당 텍스트와 일치하지 않는 항목만 남기기
  const updatedTodos = todos.filter((todo) => todo.count !== classNum);

  // 로컬스토리지 업데이트
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

// 실행 --------------------------------------------------------------------------------------

// 로드 시 저장소 확인
loadTodosFromLocalStorage();

buttonTodo.addEventListener("click", addTodoAndSave);
// todoActionRewriteAll.addEventListener("click", addTodoAndSave);

todoActionDeleteAll.forEach((deleteButton) => {
  deleteButton.addEventListener("click", (event) => {
    deleteTodoAndSave(event);
  });
});
