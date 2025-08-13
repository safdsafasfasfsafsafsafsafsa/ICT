import React from "react";
import List from "./List";

export default function Lists(initData, setInitData) {
  return (
    <div className="lists">
      {initData.map((data) => (
        <List
          key={data.id}
          id={data.id}
          todo={data.todo}
          spending={data.spending}
          initData={initData}
          setInitData={setInitData}
        />
      ))}
    </div>
  );
}
