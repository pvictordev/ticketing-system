import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  return (
    <div className="App">
        <h1>
          {!data ? "Loading..." : data}
        </h1>
    </div>
  );
}

export default App;
