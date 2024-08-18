import React, { useState } from 'react'
import './chatlist.css'
import AddUser from './AddUser/AddUser';
const Chatlist = () => {
    const[addMode,setAddMode]=useState(false);
  return (
    <div className='chatList'>
        <div className='search'>
            <div className='searchBar'>
                <img src='./search.png' alt=''/>
                <input type='text' placeholder='Search'/>
            </div>
            <img src={addMode?"./minus.png":'./plus.png'} alt='' className='add'onClick={()=>setAddMode(prev=>!prev)}/>
        </div>

        <div className='item'>
            <img src='./avatar.png' alt=''/>
            <div className='texts'>
                <span>Steph</span>
                <p>Hi Daddy!</p>
            </div>
        </div>
        <div className='item'>
            <img src='./avatar.png' alt=''/>
            <div className='texts'>
                <span>Joey</span>
                <p>Come watch my show.</p>
            </div>
        </div>
        <div className='item'>
            <img src='./avatar.png' alt=''/>
            <div className='texts'>
                <span>DJ</span>
                <p>Karate class??</p>
            </div>
        </div>
        <div className='item'>
            <img src='./avatar.png' alt=''/>
            <div className='texts'>
                <span>Jesse</span>
                <p>Where are you?</p>
            </div>
        </div>
        {addMode && <AddUser />}
    </div>
  )
}

export default Chatlist