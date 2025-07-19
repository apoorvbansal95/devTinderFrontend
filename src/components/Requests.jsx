import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'

export default function Requests() {
    const dispatch= useDispatch()
    const allRecievedrequests= useSelector((store)=>store.requests)

    const fetchRequest= async()=>{
        try{
            const allrequest= await axios.get(BASE_URL+"/user/requests/recieved", {withCredentials:true} )
            console.log(allrequest.data.data)
            dispatch(addRequest(allrequest.data.data))
            
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchRequest()
    },[])

    if(!allRecievedrequests) return 
    if (allRecievedrequests.length===0){
        return <h1 className='flex justify-center my-10'>No Pending Requests</h1>
    }

    const reviewRequest=async(status, req_id)=>{
        try{
            const res= await axios.post(BASE_URL+"/request/review/"+status+"/"+req_id, {}, {withCredentials:true})
            dispatch(removeRequest(req_id))
        }catch(err){
            console.log(err)
        }
    }


  return (
    <div className='text-center my-5'>
      <h1 className='font-bold text-2xl'>Requests</h1>
        {allRecievedrequests.map((req)=>{
            const {firstName, lastName, photo, about}=req.fromUserId
            const {_id}=req 
            return (
                <div className='flex m-4 p-4 items-center bg-base-300 w-1/2 m-auto'>
                    <div>
                        <img alt="photo" className='w-30 h-30 ' src={photo}/>
                    </div>
                    <div className='text-left m-4 p-4'>
                    <h2 className='font-bold text-xl'>{firstName+ " "+ lastName}</h2>
                    <h2>{about}</h2>
                    </div>
                    <div className='mx-9'>
                    <div className='flex my-2 '>
                        <button className=' btn btn-soft btn-accent'  onClick={()=>reviewRequest("accepted", _id)}>Accept</button>
                    </div>
                    <div className='flex btn btn-soft btn-error'>
                        <button onClick={()=>reviewRequest("rejected", _id)}>Reject</button>
                    </div>  
                    </div>                 
                </div>
            )
        })}
    </div>
  )
}
