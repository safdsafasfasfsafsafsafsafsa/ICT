import { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const initTodoData = [
    {
      id: "1",
      title: "공부",
      completed: true,
    },
    {
      id: "2",
      title: "청소",
      completed: false,
    },
  ];
  const [todoData, setTodoData] = useState(initTodoData);

  const initValue = ""; // 타이핑 기억
  const [value, setValue] = useState(initValue);

  // const btnStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float: "right",
  // };

  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none",
  //   };
  // };

  // const handleClick = (id) => {
  //   console.log(id);
  //   let newTodoData = todoData.filter((data) => data.id !== id);
  //   console.log(newTodoData);
  //   setTodoData(newTodoData); // 내용물을 new~로 변경
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setValue(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((todoData) => [...todoData, newTodo]);
    setValue([""]);
  };

  // const handleCompletedChange = (id) => {
  //   console.log("체크");
  //   let newTodoData = todoData.map((data) => {
  //     if (data.id === id) {
  //       data.completed = !data.completed; // boolean 반전
  //     }
  //     return data;
  //   });
  //   setTodoData(newTodoData);
  // };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo App</h1>
        </div>
        {/* <div style={getStyle()}>
          <input type="checkbox" defaultChecked={false} />
          공부하기
          <button style={btnStyle}>X</button>
        </div>
        <div style={getStyle()}>
          <input type="checkbox" defaultChecked={false} />
          청소하기
          <button style={btnStyle}>X</button>
        </div> */}
        {/* {todoData.map((data) => (
          <div key={data.id} style={getStyle(data.completed)}>
            <input
              type="checkbox"
              onChange={() => handleCompletedChange(data.id)}
              // defaultChecked={false}
              checked={data.completed}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              X
            </button>
          </div>
        ))} */}
        <Lists todoData={todoData} setTodoData={setTodoData} />
        {/* 폼 입력 */}
        {/* <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="입력하기"
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="enter"
            className="btn"
            style={{ flex: "1" }}
          />
        </form> */}
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
