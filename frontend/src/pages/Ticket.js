import React,{useState} from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";
import axios from 'axios';


const Ticket = () => {
  // const [formData, setFormData] = useState({ fullName: '', message: '' });
  const[fullName,setFullName]=useState('');
  const[message,setMessage]=useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(fullName);
  //   console.log(message);
  //   axios.post('http://localhost:3001/api/ticket', {
  //     fullName: fullName,
  //     message: message
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullName +' '+ message);
  }


    return (
        <>
        <div className='user'>
            <Link className='user-link' to="/admin">Admin</Link>
        </div>
        <div className="login-box">
   
          <h2>Type your ticket</h2>
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input type="text" required=""
                name='fullName'
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                />
                <label>Full name</label>
              </div>
              <div className="user-box">
                <input type="text" required=""
                  name='message'
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                />
           
                <label>Message</label>
              </div>
              {/* {nameError && <div className="error">{nameError}</div>} */}
              <div className='result-box'>
                <button type='submit'>
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