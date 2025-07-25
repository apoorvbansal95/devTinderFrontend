import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'
import { removeUser } from '../utils/userSlice'

export default function NavBar() {
  const user = useSelector((store => store.user))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true })
      dispatch(removeUser())
      navigate("/login")

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">🧑‍💻DevTinder</Link>
        </div>
        <div className="flex gap-2">
          {user && (
            <p className="text-pink-400 font-bold text-lg px-4 py-2 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700 shadow-md animate-fade-in">
              Welcome, {user.firstName}!
            </p>
          )}
          {user && <div className="dropdown dropdown-end mx-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

              <div className="w-10 rounded-full">
                <img
                  alt="User_profile"
                  src={user.photo} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/requests">Requests</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}
