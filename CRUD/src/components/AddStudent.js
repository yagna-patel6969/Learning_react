import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddStudent = () => {

    const API="https://69a59dd7885dcb6bd6a8c916.mockapi.io/basic-api/Name"
    const [data,setData]=useState({
        name:"",
        gender:""
    })

    const naviagate= useNavigate();

    const AddStudentData=()=>{
        fetch(API,{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(()=>{
                alert("Student data added");
                naviagate("/")
            })
    }

    return (
        <>
            <label for="stname">Name</label>
            <input 
            type='text' 
            id='stname'
            onChange={(e)=>{
                setData({...data,name:e.target.value})
            }}
            />
            <br/>
            <br/>

            <label for="stgen">Gender</label>
            <input 
            type='text' 
            id='stgen'
            onChange={(e)=>{
                setData({...data,gender:e.target.value})
            }}
            />
            <br/>
            <br/>

            <input 
            type='submit' 
            value="ADD"
            onClick={AddStudentData}
            />
        </>
    )
    }

export default AddStudent