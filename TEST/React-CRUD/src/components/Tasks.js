import react, { useState, useEffect, useContext } from "react";
import { EditContext } from "../contexts/EditContext";
import { IdContext } from "../contexts/IdContext";
import Task from "./Task";

export default function Tasks({ data, setData, setToast, setIsVisible }) {
  const { targetId } = useContext(IdContext);
  const { setTargetId } = useContext(IdContext);

  // 입력
  const initTextTodo = "";
  const initTextSpending = "";
  const [textTodo, setTextTodo] = useState(initTextTodo);
  const [textSpending, setTextSpending] = useState(initTextSpending);

  // 수정 상태 체크
  const { isEditing } = useContext(EditContext);
  const { setIsEditing } = useContext(EditContext);

  const [editedTodo, setEditedTodo] = useState("");
  const [editedSpending, setEditedSpending] = useState("");

  // -------------------------
  useEffect(() => {
    if (targetId) {
      const foundItem = data.find((item) => item.id === targetId);
      console.log(targetId);
      setEditedTodo(foundItem.todo);
      setEditedSpending(foundItem.spending);
    }
  }, [targetId]);

  // --------------------------
  // create
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

    if (data) {
      const newData = data.map((data) => {
        if (data.id === targetId) {
          data.todo = editedTodo;
          data.spending = editedSpending;
        }
        return data;
      });

      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setIsEditing(false);

      setToast("update");
      setIsVisible(true);
    }
  };

  const handleChangeEditedTodo = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleChangeEditedSpending = (e) => {
    setEditedSpending(e.target.value);
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
              value={editedTodo}
              onChange={handleChangeEditedTodo}
            />
            <Task
              text="비용"
              type="number"
              name="spending"
              value={editedSpending}
              onChange={handleChangeEditedSpending}
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
      {/* {isEditing ? (
          // <form onSubmit={handleSubmitUpdate}>
          //   <div className="tasks">
          //     <div className="task">
          //       <p className="task__title">지출 항목</p>
          //       <input
          //         type="text"
          //         className="task__input"
          //         name="todo"
          //         value={textTodo}
          //         onChange={handleChangeTodo}
          //       />
          //     </div>
          //     <div className="task">
          //       <p className="task__title">비용</p>
          //       <input
          //         type="number"
          //         className="task__input"
          //         name="spending"
          //         value={textSpending}
          //         onChange={handleChangeSpending}
          //       />
          //     </div>
          //   </div>
          //   <button className="write-btn" type="submit">
          //     수정
          //   </button>
          // </form>
        ) : (
          // <form onSubmit={handleSubmitCreate}>
          //   <div className="tasks">
          //     <div className="task">
          //       <p className="task__title">지출 항목</p>
          //       <input
          //         type="text"
          //         placeholder="예) 도서"
          //         className="task__input"
          //         name="todo"
          //         value={textTodo}
          //         onChange={handleChangeTodo}
          //       />
          //     </div>
          //     <div className="task">
          //       <p className="task__title">비용</p>
          //       <input
          //         type="number"
          //         className="task__input"
          //         name="spending"
          //         value={textSpending}
          //         onChange={handleChangeSpending}
          //       />
          //     </div>
          //   </div>
          //   <button className="write-btn" type="submit">
          //     제출
          //   </button>
          // </form>
        )} */}
    </>
  );
}
