import React from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'

export default function UserCard({user}) {
    console.log(user)
    const {firstName, lastName, photo, age, about, gender, skills}=user

    const handleSendRequest= async(status, to_usedid)=>{
      try{
        const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+to_usedid, {}, {withCredentials:true})
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }



  return (
    <div>
<div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={user.photo}
      alt="profile" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" " +lastName}</h2>
    {age && gender && <p>{age+ " "+ gender +" "}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
        <button className="btn btn-secondary " onClick={()=>handleSendRequest("ignored", user._id)}>Ignore</button>
      <button className="btn btn-primary " onClick={()=>handleSendRequest("interested", user._id)}>Interested</button>
    </div>
  </div>
</div>      
    </div>
  )
}
