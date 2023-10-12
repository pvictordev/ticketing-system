import './App.css';
import React,{useState, useEffect} from 'react';
import { Route, Routes, Switch } from "react-router-dom";
import Ticket from './pages/Ticket';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>setData(`Full name == ${data.fullName} Message == ${data.message} `))
  },[])

  
  return (
    <div className="App">
        {/* <p>
          {data ? data : "Loading..."}
        </p> */}
        
        <Routes>
          <Route path="/" element={<Ticket />} />

          <Route path="admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
    </div>
  );
}

export default App;
