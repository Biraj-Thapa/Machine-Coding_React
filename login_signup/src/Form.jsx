import React, { useState } from 'react'

const Form = () => {
    const [isLogIn,setIsLogIn]=useState(true)
  return (
 <div className="container">
    <div className="form-container">
        <div className="form-toggle">
            <button className={isLogIn ? "active":""} onClick={()=>setIsLogIn(true)} >Login</button>
            <button className={!isLogIn?"active":""} onClick={()=>setIsLogIn(false)}>Sign Up</button>
        </div>
        {isLogIn?<>
        <div className="form">
            <h2>Login Form</h2>
            <input type="text" placeholder='Enter your Email' />
            <input type='text' placeholder='Enter your Password'/>
            <a href="#">Forgot Password?</a>
            <button>Log In</button>
           <p>Not a member?  <a  onClick={()=> setIsLogIn(false)}> Signup Here </a></p>
        </div>
        </>:<>
        <div className="form">
            <h2>Signup Form</h2>
            <input type="text" placeholder='Enter your Email' />
            <input type='text' placeholder='Enter your Password'/>
            <input type='text' placeholder='Confirm your Password'/>
            <button>Sign Up</button>
            <p>Already a member?  <a  onClick={()=> setIsLogIn(true)}> Login Here </a></p>

        </div>
        </>}

    </div>

 </div>
  )
}

export default Form