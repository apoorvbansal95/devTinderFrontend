import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'
import { motion, AnimatePresence } from "framer-motion";

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

if (!feed) return 
if (feed.length<=0) return <h1 className='justify-center  flex my-10'> No more matches found</h1>

  return feed && (
   <div className='flex justify-center my-10'>
    {/* <UserCard user={feed[0]}/> */}
    <AnimatePresence>
  {feed.length > 0 && (
    <motion.div
      key={feed[0]._id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <UserCard user={feed[0]} />
    </motion.div>
  )}
</AnimatePresence>
   </div>
  )
} 
