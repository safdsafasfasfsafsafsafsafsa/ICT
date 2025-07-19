import { useState } from "react";

export default function List({ id, title, completed, todoData, setTodoData }) {
  // 수정 상태 체크
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    console.log(id);
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
    setTodoData(newTodoData); // 내용물을 new~로 변경
  };

  const handleCompletedChange = (id) => {
    console.log("체크");
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed; // boolean 반전
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });

    setTodoData(newTodoData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form style={getStyle(completed)} onSubmit={handleSubmit}>
        <input value={editedTitle} autoFocus onChange={handleEditChange} />
        {/* 수정 취소하는 의미로 변경 */}
        <button style={btnStyle} onClick={() => setIsEditing(false)}>
          X
        </button>
        <button style={btnStyle}>Save</button>
      </form>
    );
  } else {
    return (
      <div key={id} style={getStyle(completed)}>
        <input
          type="checkbox"
          onChange={() => handleCompletedChange(id)}
          // defaultChecked={false}
          checked={completed}
        />
        {title}
        <button style={btnStyle} onClick={() => handleClick(id)}>
          X
        </button>
        <button style={btnStyle} onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>
    );
  }
}
