
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  const handelClick = () => {

  }
  console.log(name, password, "name")
  return (
    <div className="App">
      Hello React app
      <div>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onSubmit={handelClick}> submit</button>
      </div>
    </div>
  );
}