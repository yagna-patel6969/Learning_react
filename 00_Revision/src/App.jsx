import React, { useState } from 'react'
import Form from './Form'
import {Nav} from './Components/Nav'
import { Footer } from './Components/Footer'
import { PropsDemo } from './Components/PropsDemo'
import { Card } from './Components/Card'
function App() {
  
  // const [userName,setuserName]=useState("yagna");
  // const [num,setNum]=useState(1);

  // const changeName=()=>{
  //   setuserName("Patel Yagna");
  // }

  // const increment=()=>{
  //   setNum(num+1);
  // }

  // const Decrement=()=>{
  //   setNum(num-1);
  // }

  // const reset=()=>{
  //   setNum(0);
  // }

  return (
    <div>
      {/* <h1>UserName is : {userName}</h1>
      <button onClick={changeName}>Cick to change user name</button>
      <h1>num: {num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
      {/* <Form/> */}

      {/* <Nav/>
      <Footer/> */}


      {/* <PropsDemo userName="yagna"/> */}

      <Card name="yagna" age="21" gender="Male" />
      <Card name="smit" age="22" gender="Male" />


    </div>
  )
}

export default App