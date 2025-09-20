import React , {useState , useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import {Dashboard as DashboardIcon }from "@mui/icons-material";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';  
import PeopleIcon from '@mui/icons-material/People';
import '../App.css';

import Posts from '../components/Posts'
import Support from '../components/Support'
import Connections from '../components/Connections';


// 
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


const UserDashboard = () => {
  const [userName, setCustomerName] = useState("User");
  const [activePage , setactivePage] = useState("dashboard")

  useEffect(()=>{
    const storedName = localStorage.getItem("userName");
    if (storedName){
      setCustomerName(storedName);
    }
  }, [])

  const handlelogout = () =>{
    localStorage.clear();
    alert("Logged out successfully!")
    window.location.href = "/";
  }

  const renderContent =()=>{
    if (activePage === "dashboard"){
      return  (
        <>
         <div className='dashboard-main-container'>
            <h2 className='dashboard-main-heading'>Welcome  , <span>{userName}</span> 👋</h2> 
            <p  className='dashboard-subtext'>Here you can manage your posts, connections, and settings.</p>
          <div className='dashboard-list'>       
            <ul>
              <li><ElectricBoltIcon className="icon schedule"/><b>Create :</b>  Platform-optimized captions and images instantly.</li>
              <li><ManageHistoryIcon className="icon schedule"/><b>Schedule & Auto-Post :</b> To Instagram, Facebook, LinkedIn, X, and Pinterest.</li>
              <li><AssessmentIcon className="icon schedule"/><b>Track Engagement :</b> with analytics and insights in one place.</li>
              <li><PeopleIcon className="icon schedule"/><b>Connect Accounts :</b> Manage all your social platforms seamlessly.</li>
              <li><QueryBuilderIcon className="icon schedule"/><b>Save Time :</b>Automating repetitive posting tasks.</li>
            </ul>
          </div>
          <p className='dashboard-footer'>
            Start creating, posting, and growing your brand effortlessly 
          </p>
         </div>
        </>
      )
    }

    if(activePage === "posts"){
      return <Posts/>
    }

    if (activePage === "connections"){
      return <Connections/>
    }

    if (activePage === "support"){
      return <Support/>
    }
  }
  
  return (
    <>
      <div className='dashboard-container'>
        <div className='sidebar-container'>
          <div className='logo-section'>
            <h3>
              <ElectricBoltIcon style={{ fontSize: "50px", color: '#8233D7' }} /> SocialAi
            </h3>
          </div>

          <nav className="sidebar-nav">
            <div className="sidebar-top">
              <div className='sidebar-item' onClick={()=>setactivePage("dashboard")}>
                <h3>
                  <DashboardIcon/>
                  <span>Dashboard</span>
                </h3>
              </div>
              
              <div className='sidebar-item' onClick={()=>setactivePage("posts")}>
                <h3>
                  <PostAddIcon/>
                  <span>Create Post</span>
                </h3>
              </div>
              <div className='sidebar-item' onClick={()=>setactivePage("connections")}>
                <h3>
                  <PeopleIcon/>
                  <span>Connect</span>
                </h3>
              </div>
            </div>
            
            <div className="sidebar-bottom">
              <div className='sidebar-item' onClick={()=>setactivePage("support")}>
                <h3><HeadsetMicIcon/><span>Support</span></h3>
              </div>
              <div className='sidebar-item logout' onClick={handlelogout}>
                <h3> <LogoutIcon/> <span>Logout</span></h3>
              </div>

              <div className='sidebar-item profile-item' title={`${userName}'s Profile`}>
                <div className='profile-placeholder'>
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span>{userName}</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className='dashboard-main-contant'>
        {renderContent()}
        </div>
      </div>
    </>
  )
}

export default UserDashboard
