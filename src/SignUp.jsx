import React, { useState } from 'react'
import './SignUp.css';

const SignUp = ({setStatus,status,userDetails,setuserDetails,setUsers,users}) => {
  let handleChange=(e)=>{
    let recent_data=e.target.value
    let input_name=e.target.name
    let finalData={...userDetails}
    finalData[input_name]=recent_data
    setuserDetails(finalData)
  }
  let handleSubmit=()=>{
    console.log(userDetails);
    let finalData=[...users,userDetails]
    setUsers(finalData)
    setuserDetails({
      uname:'',
      uphone:'',
      uemail:'',
      ucity:'',
      ustate:'',
      upassword:''
  })
    console.log(users);
    
  }
  return (
    <>
    <div className={`outerDiv ${status?'overlap':''}`}></div>
    <div className={`en ${status?'show':''}`}>
      <div className='regTop'>
        <h1>Enter Your Details</h1>
        <i class="fa-solid fa-xmark" onClick={()=>{setStatus(!status)}}></i>
      </div>
      <div className='regDetails'>
        <label>Name:</label>
        <input type="text" value={userDetails.uname} name="uname" onChange={handleChange}/>
      </div>
      <div className='regDetails'>
        <label>Phone</label>
        <input type="text" value={userDetails.uphone} name='uphone' onChange={handleChange}/>
      </div>
      <div className='regDetails'>
        <label>Email:</label>
        <input type="text" value={userDetails.uemail} name='uemail' onChange={handleChange}/>
      </div>
      <div className='regDetails'>
        <label>City:</label>
        <input type="text" value={userDetails.ucity} name='ucity' onChange={handleChange}/>
      </div>
      <div className='regDetails'>
        <label>State:</label>
        <input type="text" value={userDetails.ustate} name='ustate' onChange={handleChange}/>
      </div>
      <div className='regDetails'>
        <label>Password:</label>
        <input type="password" value={userDetails.upassword} name='upassword' onChange={handleChange}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default SignUp