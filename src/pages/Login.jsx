import React, { useState } from 'react'

const Login = () => {
  const [currenState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async (event) => {
    event.preventDefault();

  }
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' onSubmit={onSubmitHandler}>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currenState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currenState == 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot password</p>
        {
          currenState == 'Login' ?
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            :
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }

      </div>
      <button className='bg-black px-8 py-3 text-white'>{currenState == 'Login' ? 'Sing In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login