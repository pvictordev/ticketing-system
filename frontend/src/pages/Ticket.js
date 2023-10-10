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
    // console.log(newData)
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
      console.error(error); 
    })
  }

    return (
      <div className='ticket'>
        <div className='Link'><Link className='Link__text' to="/admin">Admin</Link></div>
        <div className='ticket__content'>
          <form className='form' onSubmit={submit}>

            <div className="form__content">
              <h1>Ticket</h1>
              <div className="form__box">
                <label>Full name</label>
                <input type="text" required=""
                name='fullName'
                value={formData.fullName}
                onChange={(e) => handle(e)}
                />
              
              </div>

              <div className="form__box">
                <label>Message</label>
                <input type="text" required=""
                  name='message'
                  value={formData.message}
                  onChange={(e) => handle(e)}
                />
              </div>

              <div className='result-box'>
                <button type='submit'>
                  Send
                </button>
                <div className='check-icons'>
                  <IoCheckmarkDoneCircle className='check-icon check-icon__accepted'/>
                  {/* <AiFillCloseCircle className='check-icon check-icon__rejected'/> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}
export default Ticket