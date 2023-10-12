import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Dashboard() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])


  const [isChecked, setIsChecked] = useState([]);

  const handleChange = (event, index) => {
    const newData = [...data];
    newData[index].status = event.target.checked;
    setData(newData);
    setIsChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = event.target.checked;
      return newState;
    });
  };

  const dataMap = data.map((item, index)=>(
    <tr key={item.message}>
      <td>{item.fullName}</td>
      <td>{item.message}</td>
      <td>
        <input type='checkbox' 
          value={isChecked[index] || false} 
          onChange={(event) => handleChange(event, index)}
        />
      </td>
    </tr>
  ))
  console.log(data)

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__content'>
          <h1>Dashboard</h1>
          <div className='content__table'>
            <table>
              <tbody>
              <tr>
                  <th>Full Name</th>
                  <th>Message</th>
                  <th>Status</th>
              </tr>
                {dataMap}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>
    </div>
  )
}
