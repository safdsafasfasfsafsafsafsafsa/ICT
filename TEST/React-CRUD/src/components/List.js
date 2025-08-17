export default function List({
  id,
  todo,
  spending,
  handleClickUpdate,
  handleClickDelete,
}) {
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
