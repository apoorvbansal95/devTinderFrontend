import React from 'react'

export default function UserCard({user}) {
    console.log(user)
    const {firstName, lastName, photo, age, about, gender, skills}=user

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
        <button className="btn btn-secondary ">Ignore</button>
      <button className="btn btn-primary ">Interested</button>
    </div>
  </div>
</div>      
    </div>
  )
}
