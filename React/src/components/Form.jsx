// import { useState } from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          placeholder="입력하기"
          value={value}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="enter"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    </div>
  );
}
