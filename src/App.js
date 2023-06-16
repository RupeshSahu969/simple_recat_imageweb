import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  
  console.log(user);


  return (
    <div>
      <h1>Hello word</h1>
      {user.length > 0 &&
        user.map((item) => (
          <div key={item.id} style={{ display: "flex" }}>
            <h1>{item.name}</h1>
            <p>{item.username}</p>
            <p>{item.email}</p>
          </div>
        ))}
    </div>
  );
}



export default App;
