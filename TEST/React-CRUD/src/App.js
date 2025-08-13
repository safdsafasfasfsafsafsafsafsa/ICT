import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // 저장 데이터
  const initData = [
    {
      id: "1",
      todo: "식비",
      spending: "1200",
    },
    {
      id: "2",
      todo: "밥",
      spending: "11000",
    },
  ];
  // const initData = localStorage.getItem("data")
  //   ? JSON.parse(localStorage.getItem("data"))
  //   : [];
  const [data, setData] = useState(initData);

  // 입력
  const initTextTodo = "";
  const initTextSpending = "";
  const [textTodo, setTextTodo] = useState(initTextTodo);
  const [textSpending, setTextSpending] = useState(initTextSpending);

  // 토스트 출력
  const [toast, setToast] = useState("");
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="App">
      {/* h1 위에 상태 변화 따라 출력하도록 알림 숨기기, 하나만 출력하려면? */}
      <header>
        {showToast && <>{() => renderToast}</>}
        <h1 className="title">예산 계산기</h1>
      </header>
      {/* 컨테이너 */}
      <section className="container">
        {/* 작성폼 */}
        <div className="writing">
          <div className="writing__todo">
            <p className="writing__title">지출 항목</p>
            <input type="text" className="todo__text" />
          </div>
          <div className="writing__spending">
            <p className="writing__title">비용</p>
            <input type="text" className="spending__text" />
          </div>
        </div>
        <button className="write-btn">제출</button>
        <div className="margin-only"></div>
        {/* 목록: json 읽어 map으로 복제 */}
        <div className="lists">
          {initData.map((data) => (
            <div key={data.id} className="list">
              <p className="list__todo">{data.todo}</p>
              <p className="list__spending">{data.spending}</p>
              <img className="list__update" src="/img/pencil.svg" alt="수정" />
              <img
                className="list__delete"
                src="/img/trash-can.svg"
                alt="삭제"
              />
            </div>
          ))}
        </div>
        <button className="delete-btn">목록 지우기</button>
      </section>
      <footer>
        <div className="result">총 지출: </div>
      </footer>
    </div>
  );
}

export default App;
