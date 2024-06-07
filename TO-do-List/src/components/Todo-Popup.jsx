import { useState } from "react";
import "./Todo-popupcss.css";

// eslint-disable-next-line react/prop-types
const PopupForm = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:4000/task/createTask", {
  //     title,
  //     description
  //   }).then((response) => {
  //     if (response.data.success == true) {
  //       console.log(response.data.message);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  //   const taskData = { title, description };
  //   onSubmit(taskData);
  //   setTitle('');
  //   setDescription('');
  //   togglePopup();
  // };

  function handleSumbit(event) {
    event.preventDefault();
    const taskData = { title };
    onSubmit(taskData);
    setTitle("");
    togglePopup();
  }

  return (
    <>
      <button className="btn-open-popup" onClick={togglePopup}>
        New Todo
      </button>
      {isOpen && (
        <div className="overlay-container">
          <div className="popup-box">
            <h2>Task Details</h2>
            <form className="form-container" onSubmit={handleSumbit}>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="buttons-popup">
                <button className="btn-submit">Ok</button>
                <button className="btn-close-popup" onClick={togglePopup}>
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
