import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api').then(res =>  res.json())
      .then(res => {
        setData(res.message)
        console.log(res.message)
      })

  }, [])

  console.log(data)
  return (
    <div className='app'> 
      <p>
        {
          data ? data : 'loading...'
        }
      </p>
    </div>
  )
}

export default App
