import { useState } from 'react'
import Header from './components/Header.jsx'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
 )
}

export default App
