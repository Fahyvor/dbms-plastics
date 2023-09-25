import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/home')
    }
  return (
    <div className='flex flex-col w-full
    py-5 items-center bg-red'>
        <div className='mt-5 text-3xl font-bold'>Create Account</div>
        <div className='login-form w-3/6 max-sm:w-5/6'>
            <form className='flex flex-col gap-5' onSubmit={handleRegister}>
                <input type='text' placeholder='firstname' required 
                className='p-3 mt-5 bg-slate-100'/>
                <input type='text' placeholder='middlename' required 
                className='p-3 mt-5 bg-slate-100'/>
                <input type='text' placeholder='lastname' required 
                className='p-3 mt-5 bg-slate-100'/>
                <input type='email' placeholder='email' required 
                className='p-3 mt-5 bg-slate-100'/>
                <input type='text' placeholder='phone number' required 
                className='p-3 mt-5 bg-slate-100'/>
                <input type='password' placeholder='password' required
                className='p-3 mt-5 bg-slate-100'/>
                <button type='submit'
                className='bg-red-600 py-2
                text-white font-bold mt-4'>Log In</button>
            </form>
        </div>

        <div className='form-footer'>
          <p>Already have an account? <a href='/login'>Login</a></p>
        </div>
    </div>
  )
}

export default Register