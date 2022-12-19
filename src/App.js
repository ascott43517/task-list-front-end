import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: false,
  },
  {
    id: 3,
    title: 'Feed the baby',
    isComplete: false
  }
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  
  const CompleteTask = CompletedTask => { 
      const tasks = taskData.map(task => {
        if (task.id === CompletedTask.id) {
          return CompletedTask;
        } else {
          return task;
        }
      });

  
    setTaskData(tasks);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData}
        onCompleteTask = {CompleteTask} />
        </div>
        
      </main>
    </div>
  );
};

export default App;
