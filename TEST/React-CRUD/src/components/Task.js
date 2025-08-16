import react, { useState, useEffect } from "react";

export default function Task({ type, name, value, onChange }) {
  return (
    <div className="task">
      <p className="task__title">지출 항목</p>
      <input
        className="task__input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
