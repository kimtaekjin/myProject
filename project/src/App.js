/*eslint-disable */
import React,{useState} from 'react';
import './App.css';

function App() {

  let [a,b]=useState('남자 코트 추천');
  return (
    <div className="App">
    <div className='black-nav'>
    <div>개발 blog</div>
    </div>
    <div className='list'>
    <div className='contant'> 
      {a} <span onClick={}>👍</span> 0
      </div>
      <div className='date'>
      <p>10월26일</p>
      </div>

    </div>

    </div>
  );
}

export default App;
