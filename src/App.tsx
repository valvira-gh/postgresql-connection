import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/data");
      setData(response.data);
    } catch (error) {
      console.error("Virhe haettaessa dataa:", error);
    }
  };

  return (
    <div>
      <h1>PostgreSQL Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.rollno}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
