import React , {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Overlay from "../pages/Overlay";
import {API_path} from '../helper/Api'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password , SetPassword] = useState("");
  const [showPassword , setShowPassword] = useState(false)
  const navigate= useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!emailRegex.test(email)){
        alert("Plese enter valid email address");
        return ;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters long and include:\n- 1 uppercase letter\n- 1 number\n- 1 special character");
        return;
    }

    try {
        const response = await fetch (`${API_path}/user/login` ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        console.log(response)

        const data = await response.json()

        if (! response.ok){
            throw new Error ( data.message || "login  failed")
        }
        SetEmail("")
        SetPassword("")
        alert("user login successfully !!")
        navigate("/userDashboard")
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.userName);
    } catch (error) {
        console.error("error:" , error)
    }

  }
  
  return (
    <div className='auth-container'>
        <div className='form-container sign-in-container'>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className='social-container'>
                    <a href="#" className="social"><InstagramIcon/></a>
                    <a href="#" className="social"><FacebookIcon/></a>
                    <a href="#" className="social"><GoogleIcon/></a>
                </div>
                <span>or use your account</span>
                <div className='infield'>
                    <input type='email' placeholder="Email"  onChange={(e)=>SetEmail(e.target.value)}  value={email}/>
                    <label></label>
                </div>
                <div className="infield" style={{ position: "relative" }}>
            <input  type={showPassword ? "text" : "password"}  placeholder="Password"  onChange={(e) => SetPassword(e.target.value)}  value={password}/>
            <span onClick={() => setShowPassword(!showPassword)} 
            style={{

              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "14px",
              color: "#8233D7",
              fontWeight: "500"
            }}>{showPassword ? "Hide" : "Show"}</span>
          </div>
                <a href="#" className="forgot">Forgot your password?</a>
                <button type="submit">Sign In</button>
                <p style={{  color: 'black' }} >Don't have an account? <Link to="/register">Sign Up</Link></p>
            </form>
        </div>
        <Overlay type="login" />
    </div>
  )
}

export default Login
