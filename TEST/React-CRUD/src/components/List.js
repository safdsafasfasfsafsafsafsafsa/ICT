import React, { useState } from "react";

export default function List(id, todo, spending, initData, setInitData) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [editedSpending, setEditedSpending] = useState(spending);

  return (
    <div key={id} className="list">
      <p className="list__todo">{todo}</p>
      <p className="list__spending">{spending}</p>
      <img className="list__update" src="/img/pencil.svg" alt="수정" />
      <img className="list__delete" src="/img/trash-can.svg" alt="삭제" />
    </div>
  );
}
