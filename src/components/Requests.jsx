import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

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

    if (allRecievedrequests.length===0){
        return <p>No Pending Requests</p>
    }

  return (
    <div className='text-center my-5'>
      <h1 className='font-bold text-2xl'>Requests</h1>
        {allRecievedrequests.map((req)=>{
            const {firstName, lastName, photo, about}=req.fromUserId
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
                        <button className=' btn btn-soft btn-accent'>Accept</button>
                    </div>
                    <div className='flex btn btn-soft btn-error'>
                        <button>Reject</button>
                    </div>  
                    </div>                 
                </div>
            )
        })}
    </div>
  )
}
