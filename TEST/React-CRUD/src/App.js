import "./App.css";
import { useState, useEffect } from "react";
import Toast from "./components/Toast";
import Tasks from "./components/Tasks";

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

  // 수정 상태 체크
  // const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState("");

  // 토스트 출력
  const [toast, setToast] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // -----------------------------------------------------
  // useEffect(() => {
  //   console.log("showToast");
  //   let timer;
  //   if (isVisible) {
  //     timer = setTimeout(() => {
  //       setIsVisible(false);
  //     }, 2500);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [isVisible]);

  // -----------------------------------------------------
  // delete
  const handleClickDelete = (id) => {
    console.log(id);
    let newData = data.filter((data) => data.id !== id);
    console.log(newData);

    setData(newData); // 내용물을 new~로 변경
    localStorage.setItem("data", JSON.stringify(newData));

    setToast("delete");
    setIsVisible(true);
  };

  // deleteAll
  const handleClickDeleteAll = (e) => {
    e.preventDefault();

    localStorage.removeItem("data");
    setData([]);

    setToast("delete");
    setIsVisible(true);
  };

  // update
  // const handleSubmitUpdate = (e) => {
  //   e.preventDefault();

  //   // const newData = data.map((data) => {
  //   //   if (data.id === id) {
  //   //     data.title = editedTitle;
  //   //   }
  //   //   return data;
  //   // });

  //   // setData(newData);
  //   // localStorage.setItem("todoData", JSON.stringify(newData));
  //   // setIsEditing(false);

  //   setToast("update");
  //   setIsVisible(true);
  // };

  // 소비 합
  const totalSpending = data.reduce(
    (acc, curr) => acc + Number(curr.spending),
    0
  );

  return (
    <div className="App">
      {/* h1 위에 상태 변화 따라 출력하도록 알림 숨기기, 하나만 출력하려면? */}
      <header>
        <Toast toast={toast} />
        <h1 className="title">예산 계산기</h1>
      </header>
      {/* 컨테이너 */}
      <section className="container">
        {/* 작성폼 */}
        <Tasks
          data={data}
          setData={setData}
          toast={toast}
          setToast={setToast}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <div className="margin-only"></div>
        {/* 목록: json 읽어 map으로 복제 */}
        <div className="lists">
          {initData.map((data) => (
            <div key={data.id} className="list">
              <p className="list__todo">{data.todo}</p>
              <p className="list__spending">{data.spending}</p>
              <button
                className="list-btn list__update"
                // onClick={setIsEditing(true)}
              >
                <img src="/img/pencil.svg" alt="수정" />
              </button>
              <button
                className="list-btn list__delete"
                onClick={() => handleClickDelete(data.id)}
              >
                <img src="/img/trash-can.svg" alt="삭제" />
              </button>
            </div>
          ))}
        </div>
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
