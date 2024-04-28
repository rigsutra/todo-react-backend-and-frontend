import { useState } from 'react';
import './TaskPage.css';
import { MdOutlineDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

const TaskPage = () => {

    const [isCompleteScreen , setIsCompleteScreen] = useState(false);
    const [newTitle , setNewTitle] = useState("");
    const [discription , setDiscription] = useState('');
    const [allTodos , setAllTodos] = useState([]);

    const handleOkbutton = () => {
        setAllTodos([...allTodos , {
            title : newTitle , 
            discription : discription}]);
        setNewTitle("");
        setDiscription("");
    }
  

  return (
    <div className="task-card">
      <div className="task-input">
        <label htmlFor="taskname" className="input-name">
          Task Name:
        </label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Enter the task" />
        <label htmlFor="taskname" className="input-name">
          Description:
        </label>
        <input type="text" value={discription} onChange={(e) => setDiscription(e.target.value)} placeholder="Enter the Description" />
        <div  className='task-input-btns'>
        <button className="task-input-btn" onClick={handleOkbutton}>Ok</button>
        <button className="task-input-btn">Cancle</button> 
        </div>
      </div>

      <div className="task-display-options">
        <button className={`isCompleteScreen ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Tasks</button>
        <button className={`isCompleteScreen ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Complete</button>
      </div>

      <div className="task">
        {allTodos.map((items , index) =>(
            <div className="tasks-names" key={index}>
            <h2>{items.title}</h2>
            <h3>{items.discription}</h3>

            <div>
            <MdOutlineDelete />
            <MdDone />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
