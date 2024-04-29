import { useState } from 'react';
import './Cardscomponent.css';
import PopupForm from './PopupForm';


const Cardscomponent = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmission = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2 className="add-task-button">
        <PopupForm onSubmit={handleTaskSubmission} />
      </h2>
      <div className="card-container">
        {tasks.map((task, index) => (
          <div key={index} className="card-body">
            <div className='card-details'>
            <h2 className="card-name-input">{task.title}</h2>
            <h3 className="card-description-input">About: {task.description}</h3>
            <p className="card-status-select">Status:</p>
            </div>
            <div className='card-buttons'>
            <button
              className="btn btn-secondary"
              
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
    </div>
  );
};

export default Cardscomponent;