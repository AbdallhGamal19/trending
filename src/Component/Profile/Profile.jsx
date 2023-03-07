import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
import { contextuserData } from '../../Context/UserDataAndLogoutStoe'

export default function Profile() {
  let { userData } = useContext(contextuserData)
  return (
    <>
      <Helmet><title>Profile</title></Helmet>
      <div className='py-5'>
        <div className="info m-auto  p-3 info-of-user">
          <h2>First name : {userData?.first_name}</h2>
          <h2>Last name : {userData?.last_name}</h2>
          <h2>Age: {userData?.age}</h2>
          <h2>Email : {userData?.email}</h2>
          
        </div>
      </div>
    </>

  )
}
