import React, { useState } from 'react'

const Header = () => {

  // const [username, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold'>username</span></h1>
      <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header