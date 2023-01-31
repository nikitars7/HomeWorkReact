import { useState } from "react";
import Button from "./Components/Button/Button";
import './Components/Button/Button.css'
function App() {
  const [count , setCount] = useState(0);

  const funcIncrement = () => {
   setCount(count + 1)
  }

  const  funcDecrement = () => {
    setCount(count - 1)
  }

  
  return (
    <div className="App">
      <h1 className="count">Count : {count}</h1>
       <div>
         <Button className="counter" countClick={funcIncrement}>Up</Button>
        </div>
       <div>
        <Button  className="counter" countClick={funcDecrement}>Down</Button>
        </div>
    </div>
  );
}

export default App;
