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
if (feed.length<=0) return <h1 className='justify-center flex my-10'> No more matches found</h1>

  return feed && (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="w-full max-w-lg mt-16">
        <AnimatePresence>
          {feed.length > 0 && (
            <motion.div
              key={feed[0]._id}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -40 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="shadow-2xl rounded-2xl bg-gray-800/90 backdrop-blur-lg p-6 border border-gray-700"
            >
              <UserCard user={feed[0]} />
            </motion.div>
          )}
        </AnimatePresence>
        {feed.length <= 0 && (
          <h1 className="text-2xl font-bold text-gray-400 text-center mt-20">No more matches found</h1>
        )}
      </div>
    </div>
  )
}
