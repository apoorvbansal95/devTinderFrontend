import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

export default function Feed() {
  const dispatch= useDispatch()
  const feed= useSelector((store)=>store.feed)
  console.log(feed)
  const fetchfeed=async ()=>{
        if (feed) return;
    try{
  
      const feeddata= await axios.get(BASE_URL+"/user/feed", {withCredentials:true})
      // console.log(feeddata.data)
      // console.log(Object.keys(feeddata))
      dispatch(addFeed(feeddata.data))
    }
    catch(err){
      console.log(err)
    }
  }
useEffect(() => {
  fetchfeed()
}, []);
  return feed && (
   <div className='flex justify-center my-10'>
    <UserCard user={feed[0]}/>
   </div>
  )
} 
