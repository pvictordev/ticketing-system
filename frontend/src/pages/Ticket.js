import React,{useState} from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {MdOutlineSmsFailed, MdOutlineTextsms} from 'react-icons/md';

import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {FcProcess} from 'react-icons/fc';
import { Link } from "react-router-dom";
import axios from 'axios';


const Ticket = () => {
  const url = 'http://localhost:5000/api';
  const [formData, setFormData] = useState({ fullName: '', message: '', });

  const [canSubmit, setCanSubmit] = useState(false);

  function handle(event) {
    const newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
    validateForm(newData);
  }

  function validateForm(data) {
    const { fullName, message } = data;
    setCanSubmit(fullName !== '' && message !== '');
  }

  function submit(event) {

    event.preventDefault();

    if (canSubmit) {
      alert('Sent');
      axios.post(url, {
        fullName: formData.fullName,
        message: formData.message,
        status: formData.status,
      })
      .then(res => {
        console.log(res.data)
      }).catch(error => {
        console.error(error)
      });
    }
   
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
                <button type='submit' disabled={!canSubmit}>
                  Send
                </button>
                <div className='check-icons'>
                  {/* <MdOutlineTextsms className='check-icon check-icon__sent'/> */}
                  {canSubmit ? (
                    <MdOutlineTextsms className='check-icon check-icon__sent' />
                  ) : (
                    <MdOutlineSmsFailed className='check-icon check-icon__error' />
                  )}

                  {/* <AiOutlineLoading3Quarters className='check-icon check-icon__pending'/> */}
                  {/* <IoCheckmarkDoneCircle className='check-icon check-icon__accepted'/> */}
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