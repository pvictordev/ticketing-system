import React,{useState} from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { set } from 'mongoose';


const Ticket = () => {
    const [formData, setFormData] = useState({fullName:'', message:''});

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <>
        <div className='user'>
            <Link className='user-link' to="/admin">Admin</Link>
        </div>
        <div className="login-box">
   
          <h2>Type your ticket</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="user-box">
                <input type="text" name="" required=""
                onChange={handleInput}
                value={formData.fullName}
                name='fullName'
                />
                <label>Full name</label>
              </div>
              <div className="user-box">
                <input type="text" name="" required=""
                onChange={handleInput}
                value={formData.message} 
                name='message'
                />
           
                <label>Message</label>
              </div>
              <div className='result-box'>
                <button onClick={() => {

                }}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  send
                </button>
                <div className='check-icons'>
                  <IoCheckmarkDoneCircle className='check-icon_accepted'/>
                  {/* <AiFillCloseCircle className='check-icon_rejected'/> */}
                </div>
              </div>
            </form>
        </div>
        </>
    )
}
export default Ticket