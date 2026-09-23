import React, { useState } from 'react'
import Form from './Form'
import {Nav} from './Components/Nav'
import { Footer } from './Components/Footer'
import { PropsDemo } from './Components/PropsDemo'
import { Card } from './Components/Card'
import { CardList } from './Components/CardList'
import axios from'axios'
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

//   const users =[
//     {
//         "pic": "https://i.pravatar.cc/150?img=1",
//         "name": "Rahul Sharma",
//         "age": 22,
//         "city": "Ahmedabad",
//         "email": "rahul.sharma@example.com"
//     },
//     {
//         "pic": "https://i.pravatar.cc/150?img=2",
//         "name": "Priya Patel",
//         "age": 21,
//         "city": "Rajkot",
//         "email": "priya.patel@example.com"
//     },
//     {
//         "pic": "https://i.pravatar.cc/150?img=3",
//         "name": "Aarav Mehta",
//         "age": 24,
//         "city": "Surat",
//         "email": "aarav.mehta@example.com"
//     },
//     {
//         "pic": "https://i.pravatar.cc/150?img=4",
//         "name": "Sneha Shah",
//         "age": 23,
//         "city": "Vadodara",
//         "email": "sneha.shah@example.com"
//     },
//     {
//         "pic": "https://i.pravatar.cc/150?img=5",
//         "name": "Rohan Desai",
//         "age": 25,
//         "city": "Gandhinagar",
//         "email": "rohan.desai@example.com"
//     }
// ]

                              //API axios
const[data,setData]=useState([]);             
const getData= async()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data);
  console.log(data);
}

  return (
    // <div className="flex flex-wrap gap-2 ">
    //   {/* <h1>UserName is : {userName}</h1>
    //   <button onClick={changeName}>Cick to change user name</button>
    //   <h1>num: {num}</h1>
    //   <button onClick={increment}>Increment</button>
    //   <button onClick={Decrement}>Decrement</button>
    //   <button onClick={reset}>Reset</button> */}
    //   {/* <Form/> */}

    //   {/* <Nav/>
    //   <Footer/> */}


    //   {/* <PropsDemo userName="yagna"/> */}

    //   {/* <Card name="yagna" age="21" gender="Male" />
    //   <Card name="smit" age="22" gender="Male" /> */}

    //   {/* {users.map((elem, idx) => (
        
    //     <CardList
    //       key={idx}
    //       name={elem.name}
    //       email={elem.email}
    //       age={elem.age}
    //       city={elem.city}
    //       pic={elem.pic}
    //     />
        
    //   ))} */}

    // </div>


                            //API calling with axios



    <>

      <button 
      className='bg-orange-600 text-white font-bold px-3 py-3  m-3 text-2xl rounded-4xl active:scale-90' onClick={getData}>
      Get Data
      </button>
      {data.map((elem,idx)=>{
        return(
        <div key={idx} className='bg-gray-50 h-40 rounded text-black flex items-center justify-between w-full px-7 py-5 mb-3'>

          <img src={elem.download_url} className='h-40 '/>
          <h1>{elem.author}</h1>


      </div>
        )
      })}
    </>
  )
}

export default App