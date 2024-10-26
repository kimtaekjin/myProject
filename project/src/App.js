/*eslint-disable */
import React,{useState} from 'react';
import './App.css';
import Header from './pages/header';
import TopNav from './pages/topNav'
import Main from './pages/main'
const port = 3000;


function App() {

  return (
    <>
    <Header/>
    <TopNav/>
    <Main/>
    </>
  );
}

function modal(){
  return(
    <div></div>
  )
}

export default App;
