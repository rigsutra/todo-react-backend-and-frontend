import { useState } from "react";
import "./Todomodel.css";

// eslint-disable-next-line react/prop-types
const TodoModel = ({onSubmit}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task) {
      const Tododata = {task};
      onSubmit(Tododata);
      setTask("");
    }
    togglePopup();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopupDelete = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="AddTask-Button" onClick={togglePopup}>
        Add Task
      </button>
      <div>
        {isOpen && (
          <div className="todo-card">
            <form className="add-task-form" onSubmit={handleSubmit}>
              <h2 className="add-task">Enter the Task</h2>
              <label htmlFor="taskname" className="task-label">
                Task Name
              </label>
              <input
                type="text"
                placeholder="Enter the Task"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="task-input"
              />
              <div className="button-container">
                <button type="submit" className="submit-button">
                  Ok
                </button>
                <button
                  type="button"
                  onClick={togglePopupDelete}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoModel;
