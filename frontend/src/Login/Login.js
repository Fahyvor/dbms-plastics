import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home')
  }
  return (
    <div className='flex flex-col w-full
    py-5 items-center bg-red'>
        <div className='mt-5 text-3xl font-bold'>Login</div>
        <div className='login-form w-3/6 max-sm:w-5/6'>
            <form className='flex flex-col gap-5' onSubmit={handleLogin}>
                <input type='text' placeholder='username' required 
                className='p-3 mt-5'/>
                <input type='password' placeholder='password' required
                className='p-3 mt-5' />
                <button type='submit'
                className='bg-red-600 py-2
                text-white font-bold mt-4'>Log In</button>
            </form>
        </div>

        <div className='form-footer mt-5'>
          <p>Are you a new user? <a href='/register'>Create Account</a></p>
        </div>
    </div>
  )
}

export default Login