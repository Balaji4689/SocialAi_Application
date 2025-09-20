import React from 'react'
import '../App.css'

const Connections = () => {
  return (
    <>
<div className='connections-page'>
  <h1>Connect Your Accounts</h1>
  <p>Link your social media profiles to start automating posts.</p>
  <div className='connections-card-container'>
    
    {/* Instagram Card */}
    <div className='connections-card'>
      <h3>Instagram</h3>
      <p>Connect your Instagram Business or Creator account.</p>
      <div className='connected-section'>
        <button className='connected-button' disabled>Connect</button>
      </div>
    </div>

    {/* LinkedIn Card */}
    <div className='connections-card'>
      <h3>LinkedIn</h3>
      <p>Link your personal or company LinkedIn page.</p>
      <button className='connect-button'>Connect</button>
    </div>

    {/* X Card */}
    <div className='connections-card'>
      <h3>X</h3>
      <p>Authorize access to your X (Twitter) account.</p>
      <button className='connect-button'>Connect</button>
    </div>

  </div>
</div>

    </>
  )
}

export default Connections