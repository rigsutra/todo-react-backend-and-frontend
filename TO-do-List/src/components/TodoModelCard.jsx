import TodoModel from "./TodoModel";

const TodoModelCard = () => {
  return (
    <div className="container">
      <h2 className="add-task-button">
        <TodoModel />
      </h2>

      <div className="card-details">
        <h2 >taskName</h2>
        <div>
          <button > Complete</button>
          <button> Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoModelCard;
