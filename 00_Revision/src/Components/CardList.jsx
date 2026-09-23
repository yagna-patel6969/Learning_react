import React from 'react'
export const CardList = (props) => {
    return (
        <>
            <div className='bg-white py-5 px-5 m-10 w-80 rounded h-100'>
                <img src={props.pic}alt='' className='h-32 w-32 rounded-full mb-3 ml-3'/>
                <p className='font-bold  text-black text-xl'>Name: {props.name}</p>
                <p className='font-bold  text-black text-xl'>City: {props.city}</p>
                <p className='font-bold  text-black text-xl'>Age: {props.age}</p>
                <p className='font-bold  text-black text-xl'>Email: {props.email}</p>
                <button className='bg-emerald-500 text-white px-2 py-4 rounded w-40 mt-3'>ADD</button>
            </div>
        </>
    )
}
