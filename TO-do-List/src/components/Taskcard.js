import React from 'react';
import './Card.css';

const Taskcardard = ({ taskName, status }) => (
  <div className="card">
    <h2 className="task-name">{taskName}</h2>
    <p className="task-status">{status}</p>
  </div>
);

export default Taskcardard;