import React, {useState, useEffect} from 'react'


export default function Dashboard() {

  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

  const dataMap = data.map((item)=>(
    <tr>
      <td>{item.fullName}</td>
      <td>{item.message}</td>
      <td><input type='radio'/></td>
    </tr>
  ))

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__content'>
          <h1>Dashboard</h1>
          <div className='content__table'>
            <table>
              <tr>
                  <th>Full Name</th>
                  <th>Message</th>
                  <th>Status</th>
              </tr>
                {/* <td>{data ? data.fullName: 'loading...'}</td>
                <td>{data? data.message: 'loading'}</td>
                <td><input type='radio'/></td> */}
                {dataMap}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
