import React from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";


const Ticket = () => {
    return (
        <>
        <div className='user'>
            <Link className='user-link' to="/admin">Admin</Link>
        </div>
        <div className="login-box">
   
          <h2>Type your ticket</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required=""/>
                <label>Full name</label>
              </div>
              <div className="user-box">
                <input type="text" name="" required=""/>
                <label>Message</label>
              </div>
              <div className='result-box'>
                <button>
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