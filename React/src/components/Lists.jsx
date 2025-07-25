import List from "./List";

export default function Lists({ todoData, setTodoData }) {
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
    <div>
      {todoData.map((data) => (
        // <div key={data.id} style={getStyle(data.completed)}>
        //   <input
        //     type="checkbox"
        //     onChange={() => handleCompletedChange(data.id)}
        //     // defaultChecked={false}
        //     checked={data.completed}
        //   />
        //   {data.title}
        //   <button style={btnStyle} onClick={() => handleClick(data.id)}>
        //     X
        //   </button>
        // </div>
        <List
          key={data.id}
          id={data.id}
          title={data.title}
          completed={data.completed}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </div>
  );
}
