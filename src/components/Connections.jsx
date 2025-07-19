import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { addConnections } from '../utils/connectionSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Connections() {
    const allconnections= useSelector((store)=>store.connection)
    const dispatch= useDispatch()
    const getfriend=async()=>{

        try{
            const friends= await axios.get(BASE_URL+"/user/requests/friends", {withCredentials:true})
            dispatch(addConnections(friends.data.data))
        
        }catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
        getfriend()
    },[])

    if (!allconnections) return;

    if (allconnections.length===0){
        return  <h1 className='text-bold text-2xl'>No connection found</h1>
    }

  return (
    <div className='text-center my-5'>
      <h1 className='font-bold text-2xl'>Connections</h1>
      {allconnections.map((frnd) => {
        const { firstName, lastName, photo, about } = frnd
        return (
          <div className=' flex m-4 p-4 bg-base-300 w-1/2 m-auto'>
            <div>
              <img alst="photo" className='w-30 h-30 ' src={frnd.photo} />
            </div>
            <div className='text-left m-4 p-4' >
              <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
              <h2>{about}</h2>
            </div>  
        </div>
      )})}
    </div>
  )
}
