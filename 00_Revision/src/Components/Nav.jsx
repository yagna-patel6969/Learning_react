import React from 'react'
import { NavRight } from './NavRight'

export const Nav = () => {
    return (
        <>
            <nav className='flex items-center py-4 px-6 justify-between bg-blue-900 '>
                <h2 className='text-2xl font-bold text-white'>YP</h2>
                <NavRight/>
            </nav>
        </>
    )
}
