import React from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedSlice'

export default function UserCard({user}) {
    const {firstName, lastName, photo, age, about, gender, skills}=user
    const dispatch=useDispatch()
    const handleSendRequest= async(status, to_userid)=>{
      try{
        const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+to_userid, {}, {withCredentials:true})
        console.log(res.data)
        dispatch(removeUserFromFeed(to_userid))    // to remove user after taking action usercard
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
