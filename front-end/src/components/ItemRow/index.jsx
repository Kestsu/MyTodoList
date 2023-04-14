import React, { useContext, useState } from "react";
import clsx from "clsx";
import "./styles.css";
import { FaEdit, FaCheck, FaRegWindowClose } from "react-icons/fa";
import TaskContext from "../../context/taskContext";

function ItemRow({ index, id, description, check }) {
  const [editMode, setEditMode] = useState(false);
  const [inputDescription, setInputDescription] = useState(description);

  const { putTask, rmTask } = useContext(TaskContext);

  const editHandle = ({ target: { value } }) => setInputDescription(value);

  const editSave = async () => putTask(id, inputDescription, check);

  const changeCheck = async ({ target: { checked } }) =>
    putTask(id, description, checked);

  return (
    <>
      <div className="item-row">
        {editMode ? (
          <>
            <div className="item-row-desc">
              <input
                data-testid={`todo-task-edit-input-${index}`}
                value={inputDescription}
                onChange={editHandle}
              />
            </div>
            <div>
              <button
                data-testid={`todo-task-edit-save-btn-${index}`}
                style={{ marginRight: "5px" }}
                onClick={editSave}
              >
                <FaCheck />
              </button>
              <button
                data-testid={`todo-task-edit-cancel-btn-${index}`}
                onClick={() => setEditMode(false)}
              >
                <FaRegWindowClose />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* <div class="container"> */}
              <input 
              data-testid={`todo-task-check-input-${index}`}
              type="checkbox" 
              id="cbx2" 
              className="scales"
              name="scales"
              defaultChecked={check}
              onChange={changeCheck}
              />
              <label for="cbx2" class="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            {/* </div> */}

            <div
              className={clsx("item-row-desc", check && "item-row-desc-check")}
            >
              {description}
            </div>
            <div style={{ width: "66px" }}>
              <button
                data-testid={`todo-task-edit-mode-btn-${index}`}
                style={{ marginRight: "5px" }}
                onClick={() => setEditMode(true)}
              >
                <FaEdit />
              </button>
              <button
                data-testid={`todo-task-remove-btn-${index}`}
                onClick={() => rmTask(id)}
              >
                <FaRegWindowClose />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ItemRow;
