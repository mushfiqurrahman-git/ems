import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    // setEmail("")
    // setpassword("")

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='rounded-xl border-2 border-emerald-600 p-20'>
        <form
          onSubmit={(e) =>
            submitHandler(e)
          }
          required
          className='flex flex-col items-center justify-center '>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }
            } required className=' border-2 outline-none bg-transparent border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input
            onChange={(e) => {
              setpassword(e.target.value)
            }
            } required className=' border-2 outline-none bg-transparent border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
          <button className='text-white outline-none bg-emerald-600 text-xl py-4 px-5 rounded-full mt-5 placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login