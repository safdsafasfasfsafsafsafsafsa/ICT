// import react, { useState, useEffect, useContext } from "react";
// import { EditContext } from "../contexts/EditContext";
// import { IdContext } from "../contexts/IdContext";

export default function List(
  id,
  todo,
  spending,
  handleClickUpdate,
  handleClickDelete
) {
  // const { targetId } = useContext(IdContext);
  // const { setTargetId } = useContext(IdContext);

  // // 수정 상태 체크
  // const { isEditing } = useContext(EditContext);
  // const { setIsEditing } = useContext(EditContext);

  // ----------------------------------------
  // // update
  // const handleClickUpdate = (id) => {
  //   setIsEditing(true);
  //   setTargetId(id);
  // };

  // // delete
  // const handleClickDelete = (id) => {
  //   let newData = data.filter((data) => data.id !== id);

  //   setData(newData); // 내용물을 new~로 변경
  //   localStorage.setItem("data", JSON.stringify(newData));

  //   setToast("delete");
  //   setIsVisible(true);
  // };

  return (
    <div key={id} className="list">
      <p className="list__todo">{todo}</p>
      <p className="list__spending">{spending}</p>
      <button className="list-btn list__update" onClick={handleClickUpdate}>
        <img src="/img/pencil.svg" alt="수정" />
      </button>
      <button className="list-btn list__delete" onClick={handleClickDelete}>
        <img src="/img/trash-can.svg" alt="삭제" />
      </button>
    </div>
  );
}
