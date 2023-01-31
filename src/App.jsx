import React, { useState } from "react";
import List from "./components/List";
import Heading from "./components/Heading";
import InputField from "./components/InputField";
import './App.css';
// import github from './github.png'

function App() {
    
  const [item, setItem] = useState([]);

  return (
    <div id='element' className="container bg-light p-4 box">

    <Heading />
     <InputField setItem={setItem}/>
     
      <div>
        <ul>
          {item.map((e, index) => {
            return <li>
              <List item = {e} index={index}/>
            </li>;
          })}
        </ul>
      </div>
      <div className="d-flex align-content-end">
      </div>
      
    </div>
  );
}

export default App;
