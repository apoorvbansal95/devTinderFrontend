import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

export default function Body() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData= useSelector((store)=>store.user)
  const fetchUser = async () => {

    try {
      if (userData){
        return 
      }
      const res = await axios.get(BASE_URL + "/profile", { withCredentials: true })
      console.log(res.data)
      dispatch(addUser(res.data))

    } catch (err) {
      if (err.status === 401) {
        navigate("/login")
      }

      console.log(err)
    }

  }
  useEffect(()=>{
    fetchUser()
      }, [])
  return (
    <div>
         <NavBar/>
         <Outlet/>     
         <Footer/>
    </div>
  )
}
