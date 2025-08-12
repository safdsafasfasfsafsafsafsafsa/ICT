import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [createToast, setCreateToast] = useState(false);
  const [updateToast, setUpdateToast] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);

  return (
    <div className="App">
      {/* h1 위에 상태 변화 따라 출력하도록 알림 숨기기, 하나만 출력하려면? */}
      <header>
        <div className="toast">아이템이 생성되었습니다.</div>
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
          <div className="list">
            <p className="list__todo">식비</p>
            <p className="list__spending">1200</p>
            <img className="list__update" src="/img/pencil.svg" alt="수정" />
            <img className="list__delete" src="/img/trash-can.svg" alt="삭제" />
          </div>
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
