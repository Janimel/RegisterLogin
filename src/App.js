import Login from './login'
import Register from './register';
import './App.css';
import { useState } from "react";

function App() {
  const [page, setpage] = useState("login")
  return (
    <div className="App">
      {page === "login" ? <Login setpage={setpage} /> : <Register setpage={setpage}/>}
    </div>
  );
}

export default App;
