import { useState } from 'react'
import Hello from "./components/Hello";
import './App.css'
import Json from './components/Json';
import Counter from './components/Counter';
import Jokes from './components/Jokes';
import Logger from './components/Logger';
import Env from './components/Env';
import Calculator from './components/Calculator';
import Express from './components/Express';
import {  Routes, Route } from "react-router-dom";
import Dynamic from './components/Dynamic';
import DynamicPage from './Pages/DynamicPage';


function App() {
 

  return (
//     <>
//  <Hello/>
//  <Json/>
//  <Counter/>
//  <Jokes/>
//  <Logger/>
//  <Env/>
//     <Calculator/>
//      <Express/>
//     </>
<div>
  <Routes>
    <Route path='/' element={<DynamicPage/>}/>
    <Route path='/user/:id' element={<Dynamic/>}/>
  </Routes>
</div>
  )
}

export default App
