import React from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <>
        <div className='user'>
            <Link className='user-link' to="/">Ticket</Link>
        </div>
        <div className="login-box">
          <h2>Login admin</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required=""/>
                <label>Full name</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
              </div>
              <div className='result-box'>
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Login
                </button>
               
              </div>
            </form>
        </div>
        </>
    )
}
export default Admin