import { useState, useEffect } from "react";
import "./Todocss.css";
import { useNavigate } from "react-router-dom";
import PopupForm from "./Todo-Popup.jsx";
import TodoModel from "./Taskpopup.jsx";
import axios from "../axiosConfig.js";

const Cardscomponent = () => {
  const navigate = useNavigate();
  const [todos, setTodo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch tasks when the component mounts
    handletododata();
  }, [todos]);

  const handletododata = async () => {
    try {
      const response = await axios.get("/todo/getTodo");
      setTodo(response.data.data);
    } catch (error) {
      console.log("Error in fectching tododata", error);
    }
  };

  const handleTaskSubmission = (todoData) => {
    setTodo([...todos, todoData]);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRemoveTask = (index) => {
    // Remove the task from the local state
    const updatedTasks = [...todos];
    updatedTasks.splice(index, 1);
    setTodo(updatedTasks);
    // Optionally, you can also remove the task from the server here
  };

  // Post a new task when the "Remove" button is clicked
  // const newTask = { title: "New Task", description: "Description of the new task" };
  // axios.post("http://localhost:4000/task/createTask", newTask)
  //   .then((response) => {
  //     console.log(response); // Log the response data to the console
  //     if (response.data.success) {
  //       // If the task was successfully created, add it to the tasks state
  //       const createdTask = response.data.task;
  //       setTasks([...tasks, createdTask]);
  //     } else {
  //       console.error("Error creating task:", response.data.message);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error creating task:", error);
  //   });

  function handleTaskOpen() {
    navigate("/task");
  }

  return (
    <div className="container">
      <h2 className="add-task-button">
        <PopupForm onSubmit={handleTaskSubmission} />
      </h2>

      <div className="card-container">
        {todos.map((todo, index) => (
          <div key={index} className="card-body">
            <div className="card-details">
              <h2 className="card-name-input">{todo.todoTitle}</h2>
            </div>
            <div className="card-buttons">
              <button className="btn btn-secondary" onClick={handleTaskOpen}>
                Open
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleRemoveTask(index)}
              >
                Done
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <TodoModel onClose={handleClose} task={todos[todos.length - 1]} />
      )}
    </div>
  );
};

export default Cardscomponent;
