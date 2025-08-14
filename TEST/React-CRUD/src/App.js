import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // 저장 데이터
  // const initData = [
  //   {
  //     id: "1",
  //     todo: "식비",
  //     spending: "1200",
  //   },
  //   {
  //     id: "2",
  //     todo: "밥",
  //     spending: "11000",
  //   },
  // ];
  const initData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  const [data, setData] = useState(initData);

  // 입력
  const initTextTodo = "";
  const initTextSpending = "";
  const [textTodo, setTextTodo] = useState(initTextTodo);
  const [textSpending, setTextSpending] = useState(initTextSpending);

  // 토스트 출력
  const [toast, setToast] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // -----------------------------------------------------
  // create
  const handleSubmit = (e) => {
    e.preventDefault();

    let newData = {
      id: Date.now(),
      todo: textTodo,
      spending: textSpending,
    };

    console.log(newData);
    setData((data) => [...data, newData]);
    localStorage.setItem("data", JSON.stringify([...data, newData])); // 로컬 저장: 키, 밸류(텍스트형) 넣기
    setTextTodo([""]);
    setTextSpending([""]);
  };

  const handleChangeTodo = (e) => {
    console.log(e.target.value);
    setTextTodo(e.target.value);
  };

  const handleChangeSpending = (e) => {
    console.log(e.target.value);
    setTextSpending(e.target.value);
  };

  // deleteAll
  // const handleClick = (id) => {
  //   console.log(id);
  //   let newTodoData = todoData.filter((data) => data.id !== id);
  //   console.log(newTodoData);
  //   setTodoData(newTodoData); // 내용물을 new~로 변경
  // };

  // 토스트 출력
  const renderToast = () => {
    if (toast === "create") {
      return <div className="toast">아이템이 생성되었습니다.</div>;
    }
    if (toast === "update") {
      return <div className="toast">아이템이 수정되었습니다.</div>;
    }
    if (toast === "delete") {
      return <div className="toast delete">아이템이 삭제되었습니다.</div>;
    }
    return null;
  };

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  };

  // 삭제는 json에 직접 접근하면 되고, 수정은?

  // 소비 합
  const totalSpending = data.reduce(
    (acc, curr) => acc + Number(curr.spending),
    0
  );

  return (
    <div className="App">
      {/* h1 위에 상태 변화 따라 출력하도록 알림 숨기기, 하나만 출력하려면? */}
      <header>
        {showToast && <>{renderToast}</>}
        <h1 className="title">예산 계산기</h1>
      </header>
      {/* 컨테이너 */}
      <section className="container">
        {/* 작성폼 */}
        <form onSubmit={handleSubmit}>
          <div className="writing">
            <div className="writing__todo">
              <p className="writing__title">지출 항목</p>
              <input
                type="text"
                placeholder="예) 도서"
                className="todo__text"
                name="todo"
                value={textTodo}
                onChange={handleChangeTodo}
              />
            </div>
            <div className="writing__spending">
              <p className="writing__title">비용</p>
              <input
                type="number"
                className="spending__text"
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
        <div className="margin-only"></div>
        {/* 목록: json 읽어 map으로 복제 */}
        <form action="">
          <div className="lists">
            {initData.map((data) => (
              <div key={data.id} className="list">
                <p className="list__todo">{data.todo}</p>
                <p className="list__spending">{data.spending}</p>
                <button className="list-btn list__update">
                  <img src="/img/pencil.svg" alt="수정" />
                </button>
                <button className="list-btn list__delete">
                  <img src="/img/trash-can.svg" alt="삭제" />
                </button>
              </div>
            ))}
          </div>
          <button className="delete-btn">목록 지우기</button>
        </form>
      </section>
      <footer>
        <div className="result">총 지출: {totalSpending}</div>
      </footer>
    </div>
  );
}

export default App;
