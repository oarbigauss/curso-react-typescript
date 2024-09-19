import React from 'react';
import Form from '../components/Form/form';
import List from '../components/List/list';
import style from './App.module.scss'
import Stopwatch from '../components/Stopwatch/stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
