import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className='bg-pink-200 py-5 px-5 m-10 w-50 h-35 rounded '>
                <p className='font-bold text-2xl'>Name: {props.name}</p>
                <p className='font-bold text-2xl'>Age: {props.age}</p>
                <p className='font-bold text-2xl'>Gender: {props.gender}</p>
            </div>
        </>
    )
}
