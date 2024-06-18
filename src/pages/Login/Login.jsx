import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
function Login() {

  const[SignState,setSignState] = useState("Sign In")
  return (
    <div className='login'>
     <img src={logo} alt="" srcset="" className='login-logo' />
     <div className="login-form">
      <h1>{SignState}</h1>
      <form action="">
        {SignState==='Sign Up'? <input type="text" placeholder="Your name" name='name' id='name' required />:<></>}
     
        <input type="email" placeholder="Email" name='email' id='email' required/>
        <input type="password" placeholder="Password" name='password' id='password' required />
       <Link to={'/Home'}> <button type="submit">{SignState}</button></Link>
      <div className="form-help">
        <div className="remember">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remember Me</label>
        </div>
        <p>Need Help?</p>
      </div>
      </form>
      <div className="form-switch">
        {SignState==="Sign In"? <p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up  Now</span></p>: <p>Already have account? <span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span></p>}
       
       
      </div>
     </div>
    </div>
  )
}

export default Login
