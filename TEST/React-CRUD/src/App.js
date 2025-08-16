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

  // 수정 상태 체크
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  // 토스트 출력
  const [toast, setToast] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // -----------------------------------------------------
  useEffect(() => {
    console.log("showToast");
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 2500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  // -----------------------------------------------------
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
  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    // const newData = data.map((data) => {
    //   if (data.id === id) {
    //     data.title = editedTitle;
    //   }
    //   return data;
    // });

    // setData(newData);
    // localStorage.setItem("todoData", JSON.stringify(newData));
    // setIsEditing(false);

    setToast("update");
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
        {isVisible && toast === "create" && (
          <div className="toast">아이템이 생성되었습니다.</div>
        )}
        {isVisible && toast === "update" && (
          <div className="toast">아이템이 수정되었습니다.</div>
        )}
        {isVisible && toast === "delete" && (
          <div className="toast delete">아이템이 삭제되었습니다.</div>
        )}
        <h1 className="title">예산 계산기</h1>
      </header>
      {/* 컨테이너 */}
      <section className="container">
        {/* 작성폼 */}
        {isEditing ? (
          <form onSubmit={handleSubmitUpdate}>
            <div className="tasks">
              <div className="task">
                <p className="task__title">지출 항목</p>
                <input
                  type="text"
                  className="task__input"
                  name="todo"
                  value={textTodo}
                  onChange={handleChangeTodo}
                />
              </div>
              <div className="task">
                <p className="task__title">비용</p>
                <input
                  type="number"
                  className="task__input"
                  name="spending"
                  value={textSpending}
                  onChange={handleChangeSpending}
                />
              </div>
            </div>
            <button className="write-btn" type="submit">
              수정
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmitCreate}>
            <div className="tasks">
              <div className="task">
                <p className="task__title">지출 항목</p>
                <input
                  type="text"
                  placeholder="예) 도서"
                  className="task__input"
                  name="todo"
                  value={textTodo}
                  onChange={handleChangeTodo}
                />
              </div>
              <div className="task">
                <p className="task__title">비용</p>
                <input
                  type="number"
                  className="task__input"
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
        )}
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
