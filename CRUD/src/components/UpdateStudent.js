import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateStudent = () => {

    const navigate=useNavigate();
    const API ="https://69a59dd7885dcb6bd6a8c916.mockapi.io/basic-api/Name";
    const {id}=useParams();

    const [data,setData]=useState({
        name:"",
        gender:""
    })

    const UpdateData=()=>{
        fetch(API+"/"+id,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        })
            .then(()=>{
                alert("Student's Data updated");
                navigate("/")
            })
    }

    useEffect(()=>{
        fetch(API+"/"+id)
            .then((res)=>res.json())
            .then((data)=>{
                setData(data)
            })
    },[])

    return (
        <>
            <label for="stname">Name</label>
            <input 
            type='text' 
            id='stname'
            value={data.name}
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
            value={data.gender}
            onChange={(e)=>{
                setData({...data,gender:e.target.value})
            }}
            />
            <br/>
            <br/>

            <input 
            type='submit' 
            value="UPDATE"
            onClick={UpdateData}
            />
        </>
    )
}
