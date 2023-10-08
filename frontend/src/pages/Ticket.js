import React,{useState} from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";
import axios from 'axios';


const Ticket = () => {
  const url = 'http://localhost:5000/api';
  const [formData, setFormData] = useState({ fullName: '', message: '' });

  function handle(event) {
    const newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
    console.log(newData)
  }
  function submit(event) {
    event.preventDefault();
    axios.post(url, {
      fullName: formData.fullName,
      message: formData.message,
    })
    .then(res => {
      console.log(res.data)
    }).catch(error => {
      console.error(error); // Обработка ошибки
    })
  }

    return (
        <>
        <div className='user'>
            <Link className='user-link' to="/admin">Admin</Link>
        </div>
        <div className="login-box">
   
          <h2>Type your ticket</h2>
            <form onSubmit={submit}>
              <div className="user-box">
                <input type="text" required=""
                name='fullName'
                value={formData.fullName}
                onChange={(e) => handle(e)}
                />
                <label>Full name</label>
              </div>
              <div className="user-box">
                <input type="text" required=""
                  name='message'
                  value={formData.message}
                  onChange={(e) => handle(e)}

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