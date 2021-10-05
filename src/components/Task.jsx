import React from 'react';
import {CgClose} from 'react-icons/cg';

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return ( 
        <>
        <div className="task-container" style={task.completed ? {transitionDuration: "0.3s" ,borderLeft: "6px solid chartreuse"} : {}} /*se a task estiver completa adiciona borda verde, senão nada*/>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button onClick={() => handleTaskDeletion(task.id)} className="remove-task-button">
                    <CgClose />
                </button>
            </div>
        </div>
        </>
    );
}

export default Task;