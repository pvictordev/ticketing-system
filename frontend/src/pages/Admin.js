import React,{useState} from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (event) => {
      setLogin(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    return (
      <div className='admin'>
        <div className='Link'><Link className='Link__text' to="/">Ticket</Link></div>
        <div className='admin__content'>
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

              <div className='result-box center '>
                <button type='submit'>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}
export default Admin