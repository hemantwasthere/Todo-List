import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)


    const { login, signup, signInWithGoogle } = useAuth()

    async function submitHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (isLoggingIn) {
            try {
                await login(email, password)
            } catch (err) {
                setError('Incorrect email or password')
            }
            return
        }
        await signup(email, password)
    }
    return (
        <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-4 sm:gap-5'>
            <h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>{isLoggingIn ? 'Sign In' : 'Sign Up'}</h1>

            {/* error  */}
            {error && <div className='w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2'>{error}</div>}

            {/* email  */}
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='bg-[#0F172A] outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-white text-lg p-2 w-full max-w-[40ch]' />

            {/* password  */}
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='bg-[#0F172A] outline-none text-white text-lg p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300' />

            {/* login || register button  */}
            <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-[#1d33dc] after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-white'>
                <h2 className='relative z-20 cursor-pointer '>
                    {!isLoggingIn ? 'Sign Up' : 'Sign In'}
                </h2>
            </button>

            {/* sign in with google  */}
            <button onClick={signInWithGoogle} className='w-full max-w-[40ch] border border-white border-solid py-2 duration-300 relative  after:absolute after:top-0 after:right-full after:bg-cyan-300 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-[#000000]'>
                <h2 className='relative z-20 cursor-pointer '>
                    Sign In With  <i className="fa-brands fa-google cursor-pointer text-blue-700 mr-[1px] "></i>oogle
                </h2>
            </button>

            {/* Already account || Dont have account  */}
            <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Already have an account, sign in' : 'Dont have an account? sign up'}</h2>

        </div>
    )
}

export default Login