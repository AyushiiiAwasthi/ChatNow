import React from 'react'
import './userinfo.css'

const Userinfo = () => {
  ;
  return (
    <div className='userInfo'>
        <div className='user'>
            <img src='./avatar.png'></img>
            <h2>Jesse Katsopolis</h2>
        </div>
        <div className='icons'>
            <img src='./more.png' alt=''></img>
            <img src='./video.png' alt=''></img>
            <img src='./edit.png' alt=''></img>
        </div>
    </div>
  )
}

export default Userinfo