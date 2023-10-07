import './App.css';
import React,{useState, useEffect} from 'react';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {AiFillCloseCircle} from 'react-icons/ai';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>setData(data.message))
  },[])

  return (
    <div className="App">
        {/* <p>
          {data ? data : "Loading..."}
        </p> */}
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
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  send
                </a>
                <div className='check-icons'>
                  <IoCheckmarkDoneCircle className='check-icon_accepted'/>
                  {/* <AiFillCloseCircle className='check-icon_rejected'/> */}
                </div>
              </div>
            </form>
        </div>
    </div>
  );
}

export default App;
