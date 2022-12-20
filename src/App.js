import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

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
    isComplete: false,
  },
];
// const KBaseUrl = "http://localhost:5000";
// const getAllCatsApi = () => {
//   return axios
//     .get(`${KBaseUrl}`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
const KBaseUrl = 'https://task-list-api-c17.herokuapp.com';
const getAllTasksApi = () => {
  return axios
    .get(`${KBaseUrl}/tasks`)
    .then((response) => {
      return convertFromApi(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
/* eslint-disable camelcase */
const convertFromApi = (tasks) => {
  return tasks.map(({ is_complete, ...rest }) => ({
    isComplete: is_complete,
    ...rest,
  }));
};
/* eslint-enable camelcase */
const App = () => {
  const [taskData, setTaskData] = useState([]);
  useEffect(() => {
    getAllTasksApi().then((tasks) => {
      console.log(tasks);
      setTaskData(tasks);
    });
  }, []);
  const CompleteTask = (CompletedTask) => {
    const tasks = taskData.map((task) => {
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
        <div>
          <TaskList tasks={taskData} onCompleteTask={CompleteTask} />
        </div>
      </main>
    </div>
  );
};

export default App;
