import { useState } from "react";
import TodoModel from "./TodoModel";

const TodoModelCard = () => {
  const [Todo, setTodo] = useState([]);

  function handleTaskSubmit(Tododata) {
    setTodo([...Todo, Tododata]);
  }

  function handleTaskComplete(index) {
    const updatedTodo = [...Todo];
    updatedTodo[index]= {...updatedTodo[index], completed: true};
    setTodo(updatedTodo);
  }

  function handleTaskDelete(index) {
    const updatedTodo = [...Todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }

  return (
    <div className="container">
      <h2 className="add-task-button">
        <TodoModel onSubmit={handleTaskSubmit} />
      </h2>
      <div className="card-details">
        {Todo.map((todo, index) => (
          <div key={index}>
            <h2 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.task}</h2>
            <div>
              <button onClick={() => handleTaskComplete(index)}>Complete</button>
              <button onClick={() => handleTaskDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoModelCard;
