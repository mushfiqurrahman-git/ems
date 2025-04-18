import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>amet consectetur, adipisicing elit. Error fugit possimus soluta esse necessitatibus neque, excepturi at blanditiis porro nobis quis vel quae ex cum.
            </p>
            <div className='mt-4'>
                <button >Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask