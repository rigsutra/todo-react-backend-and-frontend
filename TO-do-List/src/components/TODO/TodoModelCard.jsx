import { useState } from "react";
import TodoModel from "./TodoModel.jsx";
import "./TodomodelCard.css";
import { useNavigate } from "react-router-dom"; // Corrected import statement

const TodoModelCard = () => {
  const [todoList, setTodoList] = useState([]);

  const Navigate = useNavigate();

  function handleTodoSubmit(Tododata) {
    // Ensure each task has a 'completed' property initialized to false
    const newTodo = { ...Tododata, completed: false };
    setTodoList([...todoList, newTodo]);
    console.log("New todo added:", newTodo);
    console.log("Updated todoList:", todoList);
  }

  function OpenTask() {
    Navigate("/Cardscomponent");
  }

  function handleTaskComplete(index) {
    const updatedTodo = [...todoList];
    // Toggle the 'completed' property of the task at the given index
    updatedTodo[index] = { ...updatedTodo[index], completed: !updatedTodo[index].completed };
    setTodoList(updatedTodo);
    console.log("Task completed at index", index);
    console.log("Updated todoList:", updatedTodo);
  }

  function handleTaskDelete(index) {
    const updatedTodo = [...todoList];
    // Remove the task at the given index
    updatedTodo.splice(index, 1);
    setTodoList(updatedTodo);
    console.log("Task deleted at index", index);
    console.log("Updated todoList:", updatedTodo);
  }

  return (
    <div>
      <div className="add-task-card">
        <h2 className="add-task"><TodoModel onSubmit={handleTodoSubmit} /></h2>
      </div>
      <div className="task-cards">
        {todoList.map((todo, index) => (
          <div className="task" key={index}>
            <h2
              className={todo.completed ? "completed-task" : ""}
              onClick={() => handleTaskComplete(index)}
            >
              {todo.task}
            </h2>
            <div className="button-container">
              <button className="complete-button" onClick={() => handleTaskComplete(index)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button className="edit-button" onClick={OpenTask}>open</button>
              <button className="delete-button" onClick={() => handleTaskDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoModelCard;
