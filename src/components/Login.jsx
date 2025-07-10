import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

export default function Login() {
    const navigate=useNavigate()
    const [emailId, setEmail] = useState("harshit@gmail.com")
    const [password, setPassword] = useState("Harshit@123")
    const dispatch= useDispatch()
    function handleEmailChange(e) {
        setEmail(e.target.value)

    }
    function handlepasswordchange(e) {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL+"/login", {
                emailId,
                password
            }, {withCredentials:true})
            // console.log(res.data)
            dispatch(addUser(res.data))
            navigate("/")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='flex justify-center my-10'>
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">DevTinder Login</h2>
                    <div className='py-4'>
                        <span className='label-text'>Email ID</span>
                        <input value={emailId} type='text' placeholder="Email Id" className="input input-primary my-2" onChange={(e) => handleEmailChange(e)} />
                        <span className='label-text'>Password</span>
                        <input value={password} type='text' placeholder="Password" className="input input-primary my-2" onChange={(e) => handlepasswordchange(e)} />
                    </div>
                    <div className="card-actions justify-center">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#ed2a6b] text-white text-base font-bold leading-normal tracking-[0.015em]" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
