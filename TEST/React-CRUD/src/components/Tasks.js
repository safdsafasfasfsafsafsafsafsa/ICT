import react, { useState, useEffect } from "react";
import Task from "./Task";

export default function Tasks({
  data,
  setData,
  toast,
  setToast,
  isVisible,
  setIsVisible,
}) {
  // 입력
  const initTextTodo = "";
  const initTextSpending = "";
  const [textTodo, setTextTodo] = useState(initTextTodo);
  const [textSpending, setTextSpending] = useState(initTextSpending);

  // 수정 상태 체크
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  const handleSubmitCreate = (e) => {
    e.preventDefault();

    let newData = {
      id: Date.now(),
      todo: textTodo,
      spending: textSpending,
    };

    setData((data) => [...data, newData]);
    localStorage.setItem("data", JSON.stringify([...data, newData])); // 로컬 저장: 키, 밸류(텍스트형) 넣기
    setTextTodo([""]);
    setTextSpending([""]);

    setToast("create");
    setIsVisible(true);
  };

  const handleChangeTodo = (e) => {
    setTextTodo(e.target.value);
  };

  const handleChangeSpending = (e) => {
    setTextSpending(e.target.value);
  };

  // update
  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    // const newData = data.map((data) => {
    //   if (data.id === id) {
    //     data.title = editedTitle;
    //   }
    //   return data;
    // });

    // setData(newData);
    // localStorage.setItem("todoData", JSON.stringify(newData));
    // setIsEditing(false);

    setToast("update");
    setIsVisible(true);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmitUpdate}>
          <div className="tasks">
            <Task
              text="지출 항목"
              type="text"
              name="todo"
              value={textTodo}
              onChange={handleChangeTodo}
            />
            <Task
              text="비용"
              type="number"
              name="spending"
              value={textSpending}
              onChange={handleChangeSpending}
            />
          </div>
          <button className="write-btn" type="submit">
            수정
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmitCreate}>
          <div className="tasks">
            <Task
              text="지출 항목"
              type="text"
              name="todo"
              value={textTodo}
              onChange={handleChangeTodo}
            />
            <Task
              text="비용"
              type="number"
              name="spending"
              value={textSpending}
              onChange={handleChangeSpending}
            />
          </div>
          <button className="write-btn" type="submit">
            제출
          </button>
        </form>
      )}
    </>
  );
}
