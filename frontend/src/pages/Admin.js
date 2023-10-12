import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {MdOutlineSmsFailed, MdOutlineTextsms} from 'react-icons/md';
import Dashboard from './Dashboard';
import { Router, Route, Switch, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Form from '../components/Form';

const Admin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [valid, setValid] = useState(false);

    const handleLoginChange = (event) => {
      setLogin(event.target.value);
      setValid(login !== '' && password !== '');
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setValid(login !== '' && password !== '');
    };
    
    return (
      <div className="admin">
      <div className="Link">
        <Link className="Link__text" to="/">
          Ticket
        </Link>
      </div>
      <div className="admin__content"> 
        <form className='form'>
          <div className="form__content">
              <h1>Admin</h1>
              <div className="form__box">
                  <label>Login</label>
                  <input type="text" required=""
                  name='Login'
                  value={login}
                  onChange={handleLoginChange}
                  />
              
              </div>

              <div className="form__box">
                  <label>Password</label>
                  <input type="password" required=""
                  name='Password'
                  value={password}
                  onChange={handlePasswordChange}
                  />
              </div>

              <div className='result-box'>
                  <button type='submit' disabled={!valid}>
                  Send
                  </button>
                  <div className='check-icons'>
                  {valid ? (
                      <MdOutlineTextsms className='check-icon check-icon__sent green' />
                  ) : (
                      <MdOutlineSmsFailed className='check-icon check-icon__error' />
                  )}
                  </div>
              </div>
          </div>
        </form>
      </div>
    </div>
    )
}
export default Admin

