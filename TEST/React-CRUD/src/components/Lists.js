import { useContext } from "react";
import { EditContext } from "../contexts/EditContext";
import { IdContext } from "../contexts/IdContext";
import List from "./List";

export default function Lists({ data, setData, setToast, setIsVisible }) {
  const { setTargetId } = useContext(IdContext);

  // 수정 상태 체크
  const { setIsEditing } = useContext(EditContext);

  // update
  const handleClickUpdate = (id) => {
    setIsEditing(true);
    setTargetId(id);
  };

  // delete
  const handleClickDelete = (id) => {
    let newData = data.filter((data) => data.id !== id);

    setData(newData); // 내용물을 new~로 변경
    localStorage.setItem("data", JSON.stringify(newData));

    setToast("delete");
    setIsVisible(true);
  };

  return (
    <div className="lists">
      {data &&
        data.map((data__personal) => (
          <List
            key={data__personal.id}
            id={data__personal.id}
            todo={data__personal.todo}
            spending={data__personal.spending}
            handleClickUpdate={() => handleClickUpdate(data__personal.id)}
            handleClickDelete={() => handleClickDelete(data__personal.id)}
          />
        ))}
    </div>
  );
}
