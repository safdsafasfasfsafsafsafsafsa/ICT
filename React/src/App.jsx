import "./App.css";

function App() {
  const todoData = [
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

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

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
        {todoData.map((data) => (
          <div key={data.id} style={getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            {data.title}
            <button style={btnStyle}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
