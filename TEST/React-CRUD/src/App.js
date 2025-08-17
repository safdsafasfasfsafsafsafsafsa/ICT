import "./App.css";
import { useState } from "react";
import Toast from "./components/Toast";
import Tasks from "./components/Tasks";
import Lists from "./components/Lists";

function App() {
  // 저장 데이터
  // const initData = [
  //   {
  //     id: "1",
  //     todo: "식비",
  //     spending: "1200",
  //   },
  // ];
  const initData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  const [data, setData] = useState(initData);

  // 토스트 출력
  const [toast, setToast] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  // deleteAll
  const handleClickDeleteAll = (e) => {
    e.preventDefault();

    localStorage.removeItem("data");
    setData([]);

    setToast({
      id: Math.random(),
      message: "delete",
    });
    setIsVisible(true);
  };

  // 소비 합
  const totalSpending = data.reduce(
    (acc, curr) => acc + Number(curr.spending),
    0
  );

  return (
    <div className="App">
      {/* h1 위에 상태 변화 따라 출력하도록 알림 숨기기, 하나만 출력하려면? */}
      <header>
        <Toast
          toast={toast}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <h1 className="title">예산 계산기</h1>
      </header>
      {/* 컨테이너 */}
      <section className="container">
        {/* 작성폼 */}
        <Tasks
          data={data}
          setData={setData}
          setToast={setToast}
          setIsVisible={setIsVisible}
        />
        <div className="margin-only"></div>
        {/* 목록: json 읽어 map으로 복제 */}
        <Lists
          data={data}
          setData={setData}
          setToast={setToast}
          setIsVisible={setIsVisible}
        />
        <button className="delete-btn" onClick={handleClickDeleteAll}>
          목록 지우기
        </button>
      </section>
      <footer>
        <div className="result">총 지출: {totalSpending}</div>
      </footer>
    </div>
  );
}

export default App;
