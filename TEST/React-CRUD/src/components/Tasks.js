import react, { useState, useEffect } from "react";
// import Task from './Task';

export default function Task({
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

  // 토스트 출력
  //   const [toast, setToast] = useState("");
  //   const [isVisible, setIsVisible] = useState(false);

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
            <div className="task">
              <p className="task__title">지출 항목</p>
              <input
                type="text"
                className="task__input"
                name="todo"
                value={textTodo}
                onChange={handleChangeTodo}
              />
            </div>
            <div className="task">
              <p className="task__title">비용</p>
              <input
                type="number"
                className="task__input"
                name="spending"
                value={textSpending}
                onChange={handleChangeSpending}
              />
            </div>
          </div>
          <button className="write-btn" type="submit">
            수정
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmitCreate}>
          <div className="tasks">
            <div className="task">
              <p className="task__title">지출 항목</p>
              <input
                type="text"
                placeholder="예) 도서"
                className="task__input"
                name="todo"
                value={textTodo}
                onChange={handleChangeTodo}
              />
            </div>
            <div className="task">
              <p className="task__title">비용</p>
              <input
                type="number"
                className="task__input"
                name="spending"
                value={textSpending}
                onChange={handleChangeSpending}
              />
            </div>
          </div>
          <button className="write-btn" type="submit">
            제출
          </button>
        </form>
      )}
    </>
  );
}
