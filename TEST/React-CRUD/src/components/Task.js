export default function Task({ text, type, name, value, onChange }) {
  return (
    <div className="task">
      <p className="task__title">{text}</p>
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
