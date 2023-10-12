import { useState } from "react";
import './App.css'

function App() {
  const [heading, setHeading] = useState("Click on the buton")
  return (
    <div className="App">
      <h1> Hello {heading} </h1>
      <button onClick={()=>{
          setHeading("Clicked ! yeah ")
      }}> Click here</button>
      </div>
  );
}

export default App;
