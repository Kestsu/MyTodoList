import React, { useContext, useState, useRef } from "react";
import "./styles.css";
import { FaPlus } from "react-icons/fa";
import TaskContext from "../../context/taskContext";

function ItemAdd() {
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAdd = async () => {
    addTask(description)
    setDescription("")
  };


  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  }
  return (
    <div className="item-add">
      <div className="form-control">
        <input
          type="text"
          required
          data-testid="todo-task-input"
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
          ref={inputRef}
          onKeyPress={handleKeyPress}
        />
        <label>
          <span style={{ transitionDelay: "0ms" }}>N</span>
          <span style={{ transitionDelay: "50ms" }}>o</span>
          <span style={{ transitionDelay: "100ms" }}>v</span>
          <span style={{ transitionDelay: "150ms" }}>a</span>
          <span style={{ transitionDelay: "200ms" }}> </span>
          <span style={{ transitionDelay: "250ms" }}>T</span>
          <span style={{ transitionDelay: "300ms" }}>a</span>
          <span style={{ transitionDelay: "350ms" }}>r</span>
          <span style={{ transitionDelay: "400ms" }}>e</span>
          <span style={{ transitionDelay: "450ms" }}>f</span>
          <span style={{ transitionDelay: "500ms" }}>a</span>
        </label>
      </div>
      <button data-testid="todo-task-add" onClick={handleAdd} type="submit" ref={buttonRef}>
        <FaPlus />
      </button>
    </div>
  );
}

export default ItemAdd;
