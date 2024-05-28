import  { useState } from "react";
import TodoModel from "./TodoModel";
import "./TodomodelCard.css";

const TodoModelCard = () => {
  const [todoList, setTodoList] = useState([]);

  const handleTodoSubmit = (Tododata) => {
    const newTodo = { ...Tododata, completed: false };
    setTodoList([...todoList, newTodo]);
  };

  const handleTaskComplete = (index) => {
    const updatedTodo = [...todoList];
    updatedTodo[index] = { ...updatedTodo[index], completed: !updatedTodo[index].completed };
    setTodoList(updatedTodo);
  };

  const handleTaskDelete = (index) => {
    const updatedTodo = [...todoList];
    updatedTodo.splice(index, 1);
    setTodoList(updatedTodo);
  };

  return (
    <div>
      <div className="add-task-card">
        <h2 className="add-task">
          <TodoModel onSubmit={handleTodoSubmit} />
        </h2>
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
              <button className="edit-button">Open</button>
              <button className="delete-button" onClick={() => handleTaskDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoModelCard;
