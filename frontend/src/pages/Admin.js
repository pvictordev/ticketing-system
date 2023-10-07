import React,{useState} from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
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
                <label>Name</label>
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