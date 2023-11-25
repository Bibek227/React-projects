import { useState,useEffect } from 'react'             //hooks
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(0)         //hooks usestate
useEffect(()=>{
  document.title=`you clicked ${counter} times`
})
const addValue=()=>{
  // counter=counter+1
  if(counter>=20){
    setCounter(counter)
  }
  else{
    setCounter(counter+1)
  }
  
}

const removeValue=()=>{
  if(counter===0){
    setCounter(counter)
  }
  else{
    setCounter(counter-1)

  }
}
// let counter=15
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value:{counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
