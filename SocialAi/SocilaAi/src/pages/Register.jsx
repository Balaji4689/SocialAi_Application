import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Overlay from "../pages/Overlay";
import {API_path} from '../helper/Api'


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password , SetPassword] = useState("");
  const [showPassword , setShowPassword] = useState(false)
  const navigate= useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (userName .trim().length < 4){
      alert("UserName must be at least 3 Characters long ");
      return ;
    }

    if (!emailRegex.test(email)){
      alert("Plese enter valid email address");
      return ;
    }
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters long and include:\n- 1 uppercase letter\n- 1 number\n- 1 special character");
      return;
    }

    try {
      const response = await fetch(`${API_path}/user/register` , {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({userName , email , password})
      });

      console.log(response)

      const data = await response.json();
      console.log("API response data" , data);

      if (response.ok){
        SetUserName("")
        SetEmail("")
        SetPassword("")
        alert("user register successfully !")
        navigate("/login")
        
      }else{
        alert(data.message || "Registration failed.");
      }

      
    } catch (error) {
      console.log("Error :" , error);
      alert("Something went wrong. Try again!");
      
    }


  }
   
  return (
    <div className='auth-container'>
      <div className='form-container sign-up-container'>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className='social-container'>
            <a href="#" className="social"><InstagramIcon/></a>
            <a href="#" className="social"><FacebookIcon/></a>
            <a href="#" className="social"><GoogleIcon/></a>
          </div>
          <span>or use your email for registration</span>

          <div className='infield'>
            <input type='text' placeholder="Name" onChange={(e)=>SetUserName(e.target.value)} value={userName} />
            <label></label>
          </div>

          <div className='infield'>
            <input type='email' placeholder="Email" onChange={(e)=>SetEmail(e.target.value)} value={email} />
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


          <button type='submit'>Sign Up</button>
          <p style={{  color: 'black' }} >Already have an account? <Link to="/login">Sign In</Link></p>
        </form>
      </div>
      <Overlay type="register" />
    </div>
  )
}

export default Register
