import React, { useState } from 'react'
import UserCard from './UserCard'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

export default function EditProfile({user}) {
    const [firstName, setfirstName] = useState(user.firstName)
    const [lastName, setlastName] = useState(user.lastName)
    const [photo, setphoto] = useState(user.photo)
    const [age, setage] = useState(user.age)
    const [about, setabout] = useState(user.about)
    const [gender , setgender]= useState(user.gender)
    const [error, setError]= useState("")
    const dispatch= useDispatch()
    const handleSaveProfile = async () => {
        try {
           const res=  await axios.patch(BASE_URL + "/profile/edit",{firstName, lastName, photo, age, about, gender}, {withCredentials:true})
            dispatch(addUser(res?.data?.data))
        
        }
        catch(err){
            console.log(err)
            setError(err.message)
        }
    }
    return (
        <div  className="flex justify-center my-10">
        <div className='flex justify-center mx-4'>
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Edit Profile</h2>
                    <div className='py-4'>
                        <span className='label-text'>FirstName</span>
                        <input type="text" value={firstName} className="input input-primary my-2" onChange={(e) => setfirstName(e.target.value)} />
                        <span className='label-text'>LastName</span>
                        <input type="text" value={lastName} className="input input-primary my-2" onChange={(e) => setlastName(e.target.value)} />
                        <span className='label-text'>Photo</span>
                        <input type="text" value={photo} className="input input-primary my-2" onChange={(e) => setphoto(e.target.value)} />
                        <span className='label-text'>Age</span>
                        <input type="text" value={age} className="input input-primary my-2" onChange={(e) => setage(e.target.value)} />
                        <span className='label-text'>About</span>
                        <input type="text" value={about} className="input input-primary my-2" onChange={(e) => setabout(e.target.value)} />
                    </div>
                    <div className="card-actions justify-center">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#ed2a6b] text-white text-base font-bold leading-normal tracking-[0.015em]" onClick={handleSaveProfile}>Save profile</button>
                    </div>
                </div>
            </div>
        </div>
        <UserCard user={{firstName, lastName, photo, age, about, gender}}/>
        </div>
    )
}
