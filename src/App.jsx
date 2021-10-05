import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import './App.css';
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () =>  {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "teste1",
      completed: false,
    },
    {
      id: "2",
      title: "teste2",
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return{ ... task, completed: !task.completed }

      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks = {tasks} /*renderizar o Tasks.js e passar a const tasks para o Tasks.js*/
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}/>
      </div>
    </>
  );
};

export default App;