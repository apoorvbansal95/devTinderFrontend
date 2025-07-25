import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

export default function Login() {
    const navigate=useNavigate()
    const [emailId, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setfirstName] =useState("")
    const [lastName, setlastName] =useState("")
    const [isloginform, setisloginform] =useState(true)
    const [ errorMessage, setError] = useState("")
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
            //  setError(err.reponse.data)
            let errorMsg=err.response.data
            setError(errorMsg)
            console.log(err.response.data)
        }
    }

    const handleSignup = async () => {
        try {
            const res = await axios.post(BASE_URL + "/signup", {
                firstName,
                lastName,
                emailId,
                password
            }, { withCredentials: true })
            console.log(res)
            dispatch(addUser(res.data))
            return navigate("/profile")

        } catch (err) {
            let errorMsg=err.response.data
            setError(errorMsg)
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
            <div className="card bg-white/80 backdrop-blur-lg shadow-2xl w-full max-w-md rounded-2xl border border-pink-200">
                <div className="card-body p-8">
                    <h2 className="text-pink-500 drop-shadow-lg tracking-wide text-[32px] font-extrabold leading-tight px-4 text-center pb-3 pt-5 transition-colors duration-200">
          {isloginform ? 'DevTinder Login' : 'DevTinder Signup'}
        </h2>
        {!isloginform && (
          <div className="py-4 flex gap-4">
            <div className="flex-1">
              <span className="label-text text-gray-700 font-semibold">First Name</span>
              <input value={firstName} type="text" placeholder="First Name" className="input input-primary my-2 w-full" onChange={(e) => setfirstName(e.target.value)} />
            </div>
            <div className="flex-1">
              <span className="label-text text-gray-700 font-semibold">Last Name</span>
              <input value={lastName} type="text" placeholder="Last Name" className="input input-primary my-2 w-full" onChange={(e) => setlastName(e.target.value)} />
            </div>
          </div>
        )}
        <div className="py-4">
          <span className="label-text text-gray-700 font-semibold">Email ID</span>
          <input value={emailId} type="text" placeholder="Email Id" className="input input-primary my-2 w-full" onChange={handleEmailChange} />
          <span className="label-text text-gray-700 font-semibold">Password</span>
          <input value={password} type="password" placeholder="Password" className="input input-primary my-2 w-full" onChange={handlepasswordchange} />
        </div>
        <p className="text-red-500 text-center font-medium min-h-[24px]">{errorMessage}</p>
        <div className="card-actions justify-center mt-6">
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-lg hover:scale-105 transition-transform duration-200" onClick={isloginform?handleLogin: handleSignup}>
            {isloginform ? 'Login' : 'SignUp'}
          </button>
        </div>
        <p className="text-blue-500 hover:underline cursor-pointer text-center mt-6 font-semibold transition-colors duration-200" onClick={() => setisloginform((value) => !value)}>
          {isloginform ? 'New User? SignUP Here' : 'Existing User? Login Here'}
        </p>
      </div>
    </div>
  </div>
    )
}
