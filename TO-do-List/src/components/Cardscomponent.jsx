import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cardscomponent.css";
import PopupForm from "./PopupForm.jsx";
import TodoModel from "./TodoModel.jsx"; // Import the TodoModel component

const Cardscomponent = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleTaskSubmission = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleOpen = () => {
    setIsOpen(true);
    navigate("/TodoModel")
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <h2 className="add-task-button">
        <PopupForm onSubmit={handleTaskSubmission} />
      </h2>

      <div className="card-container">
        {tasks.map((task, index) => (
          <div key={index} className="card-body">
            <div className="card-details">
              <h2 className="card-name-input">{task.title}</h2>
              <h3 className="card-description-input">
                About: {task.description}
              </h3>
              <p className="card-status-select">Status: {task.status}</p>
            </div>
            <div className="card-buttons">
              <button
                className="btn btn-secondary"
                onClick={handleOpen}
                disabled={task.status === "complete"}
              >
                Open
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <TodoModel onClose={handleClose} task={tasks[tasks.length-1]} />
      )}
    </div>
  );
};

export default Cardscomponent;
