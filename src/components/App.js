
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [obj, setObj] = useState({
    name : '',
    email : '',
    password : ''
  });

  const showObject = (e) => {
    e.preventDefault();
    console.log(obj);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={showObject}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => setObj({...obj, name : e.target.value})} />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => setObj({...obj, email : e.target.value})} />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setObj({...obj, password : e.target.value})} />
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
