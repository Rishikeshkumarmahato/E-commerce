import React, { useState } from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import SignUp from './SignUp'

const Header = ({userDetails,setuserDetails,setUsers,users}) => {
  const [status, setStatus] = useState(false)
  return (
    <>
    <SignUp setStatus={setStatus} status={status} userDetails={userDetails}setuserDetails={setuserDetails} setUsers={setUsers} users={users}/>
    <div className='upper'>
      <img src={logo} alt="logo" />
      <div className='lang'>
        <select>
          <option>Language</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Urdu</option>
        </select>
        <button onClick={()=>{setStatus(!status)}}>Sign Up</button>
      </div>
    </div>
    <div className='hitems'>
        <ul>
            <li><Link to={'/'}>Home</Link> </li>
            <li><Link to={'/product'}>Products</Link></li>
            <li><Link to={'/story'}>Our Story</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Header