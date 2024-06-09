import { useState } from "react";
import "./Todo-popupcss.css";
import axios from "../axiosConfig";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const PopupForm = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/todo/createTodo", { todoTitle });
      if (response.data.success) {
        onSubmit(todoTitle);
        toast.success(response.data.message);
        setTodoTitle(""); // Clear the input field after successful submission
        togglePopup();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create todo");
    }
  };

  return (
    <>
      <button className="btn-open-popup" onClick={togglePopup}>
        New Todo
      </button>
      {isOpen && (
        <div className="overlay-container">
          <div className="popup-box">
            <h2>Task Details</h2>
            <form className="form-container" onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="taskName">
                Task Name:
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter Task Name"
                id="taskName"
                name="taskName"
                required
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
              <div className="buttons-popup">
                <button className="btn-submit" type="submit">
                  Ok
                </button>
                <button
                  className="btn-close-popup"
                  type="button"
                  onClick={togglePopup}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
