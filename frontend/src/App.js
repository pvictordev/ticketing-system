import './App.css';
import React,{useState, useEffect} from 'react';

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
        <div class="login-box">
          <h2>Type your ticket</h2>
            <form>
              <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Full name</label>
              </div>
              <div class="user-box">
                <input type="password" name="" required=""/>
                <label>Message</label>
              </div>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                send
              </a>
            </form>
        </div>
    </div>
  );
}

export default App;
