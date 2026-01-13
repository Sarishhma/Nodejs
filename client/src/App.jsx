import { useState } from 'react'
import Hello from "./components/Hello";
import './App.css'
import Json from './components/Json';
import Counter from './components/Counter';
import Jokes from './components/Jokes';
import Logger from './components/Logger';

function App() {
 

  return (
    <>
 {/* <Hello/>
 <Json/> */}
 <Counter/>
 <Jokes/>
 <Logger/>
    </>
  )
}

export default App
