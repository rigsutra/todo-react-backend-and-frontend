import { useState } from "react";
import TodoModel from "./TodoModel";

const TodoModelCard = () => {
  const [todoList, setTodoList] = useState([]);

  function handleTodoSubmit(Tododata) {
    // Ensure each task has a 'completed' property initialized to false
    const newTodo = { ...Tododata, completed: false };
    setTodoList([...todoList, newTodo]);
    console.log("New todo added:", newTodo);
    console.log("Updated todoList:", todoList);
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
    <div className="container">
      <h2 className="add-task-button">
        <TodoModel onSubmit={handleTodoSubmit} />
      </h2>
      <div className="card-details">
        {todoList.map((todo, index) => (
          <div key={index}>
            <h2
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.task}
            </h2>
            <div>
              <button onClick={() => handleTaskComplete(index)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleTaskDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoModelCard;
