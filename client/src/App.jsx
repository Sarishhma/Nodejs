import { useState } from 'react'
import Hello from "./components/Hello";
import './App.css'
import Json from './components/Json';
import Counter from './components/Counter';
import Jokes from './components/Jokes';
import Logger from './components/Logger';
import Env from './components/Env';
import Calculator from './components/Calculator';

function App() {
 

  return (
    <>
 {/* <Hello/>
 <Json/> */}
 <Counter/>
 <Jokes/>
 <Logger/>
 <Env/>
    <Calculator/>
    </>
  )
}

export default App
