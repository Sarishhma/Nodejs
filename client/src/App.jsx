import { useState } from 'react'
import Hello from "./components/Hello";
import './App.css'
import Json from './components/Json';
import Counter from './components/Counter';
import Jokes from './components/Jokes';

function App() {
 

  return (
    <>
 {/* <Hello/>
 <Json/> */}
 <Counter/>
 <Jokes/>
    </>
  )
}

export default App
