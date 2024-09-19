import React, { useState } from 'react';
import Form from '../components/Form/form';
import List from '../components/List/list';
import style from './App.module.scss'
import Stopwatch from '../components/Stopwatch/stopwatch';
import { ITask } from '../types/task';

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
