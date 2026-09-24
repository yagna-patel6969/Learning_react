import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

export const Student = () => {

    const API="https://69a59dd7885dcb6bd6a8c916.mockapi.io/basic-api/Name"

    const [data, setdata] = useState([])

    useEffect(()=>{
        fetch(API)
            .then((res)=>res.json())
            .then((data)=>{
                setdata(data)
            })
    },[])

    const DeleteData=(id)=>{
        fetch(API+'/'+id,{
            method:'DELETE'
        })
            .then(()=>{
                alert("data succefully deleted");
                    fetch(API)
                    .then((res)=>res.json())
                    .then((data)=>{
                        setdata(data);
                    })
            })
    }

    return (
        <>
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((elem)=>{
                        return(<tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.gender}</td>
                            <td>
                                <button onClick={()=>{DeleteData(elem.id)}}>DELETE</button>
                                <Link to={"/add"}>
                                    <button>
                                        ADD
                                    </button>
                                </Link>
                                <Link to={"/update/"+elem.id}>
                                    <button>
                                        UPDATE
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}
