const buttonTodo = document.querySelector(".button-todo");
const todoActionRewriteAll = document.querySelectorAll(".todo-action__rewrite");
const todoActionDeleteAll = document.querySelectorAll(".todo-action__delete");
const todoList = document.querySelector(".todo-list");
let todoCounter = parseInt(localStorage.getItem("todoCounter")) || 0;

// 항목 생성, 수정, 삭제 --------------------------------------------------------------------

// 1. 새로운 Todo 항목 생성: json 데이터 유무로 분기
function addTodo(todo = null) {
  const todoAction = document.createElement("div");
  todoAction.classList.add("todo-action");

  todoAction.classList.add(`todo-action-${todoCounter}`);
  todoCounter++;

  // 고유 ID 생성 (UUID 또는 고유 번호)
  const uniqueId = todo ? todo.id : Date.now(); // 기존 데이터의 id 사용 또는 현재 시간으로 생성
  todoAction.setAttribute("data-id", uniqueId); // 고유 ID를 data-id 속성으로 추가

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
  const text = document.createElement("span");
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
function updateTodo(event) {
  if (event.target.classList.contains("todo-action__rewrite")) {
    const todoAction = event.target.closest(".todo-action");
    const textElement = todoAction.querySelector(".todo-action__text");

    // 텍스트 수정 가능 상태로 전환
    if (!textElement.isContentEditable) {
      textElement.contentEditable = "true"; // 수정 가능
      textElement.focus(); // 포커스 설정
    } else {
      // 수정 완료 상태로 전환
      textElement.contentEditable = "false"; // 수정 불가능
      const newText = textElement.textContent; // 수정된 텍스트 가져오기

      // 로컬스토리지 업데이트
      updateTodoInLocalStorage(todoAction, newText);
    }
  }
}

// 3. Todo 항목 삭제
function deleteTodo(event) {
  if (event.target.classList.contains("todo-action__delete")) {
    const todoAction = event.target.closest(".todo-action");
    if (todoAction) {
      // classNum을 먼저 추출
      const uniqueId = todoAction.getAttribute("data-id"); // 고유 ID 가져오기
      // 로컬스토리지에서 삭제
      deleteTodoFromLocalStorage(uniqueId);
      // HTML에서 삭제
      todoAction.remove();
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
    const uniqueId = todo.getAttribute("data-id"); // 고유 ID 가져오기

    todos.push({
      id: uniqueId, // 고유 ID 저장
      text: text.textContent,
      completed: checkbox.checked,
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  console.log("Updated todos:", todos);
}

function addTodoAndSave() {
  addTodo();
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

// 로컬스토리지에서 해당 Todo 항목 업데이트
function updateTodoInLocalStorage(todoAction, newText) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const uniqueId = todoAction.getAttribute("data-id"); // 고유 ID 가져오기

  // 해당 Todo 항목 업데이트
  todos.forEach((todo) => {
    if (todo.id === uniqueId) {
      todo.text = newText; // 텍스트 업데이트
    }
  });

  // 로컬스토리지에 저장
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateTodoAndSave(event) {
  updateTodo(event);
  saveTodosToLocalStorage();
}

function deleteTodoFromLocalStorage(uniqueId) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  // 고유 ID와 일치하지 않는 항목만 남기기
  const updatedTodos = todos.filter((todo) => todo.id !== uniqueId);

  // 로컬스토리지 업데이트
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

function deleteTodoAndSave(event) {
  deleteTodo(event);
  saveTodosToLocalStorage();
}

// 실행 --------------------------------------------------------------------------------------

// 로드 시 저장소 확인
loadTodosFromLocalStorage();

buttonTodo.addEventListener("click", addTodoAndSave);

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo-action__rewrite")) {
    updateTodoAndSave(event);
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo-action__delete")) {
    deleteTodoAndSave(event);
  }
});
