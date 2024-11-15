import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "bootstrap";

function App() {


  const [count, setCount] = useState(() => {
    return 0;
  });

  const [isButton, setIsButton] = useState(() => {
    return false
  });
  const [showWelcome, setShowWelcome] = useState(() => {
    return true
  }); 

  const [bgColor, setBgColor] = useState(() => {
    return "#3f3f3f"
  });

  const handlePageLoad = () => {
    if (showWelcome) {
      setShowWelcome(false);
      window.alert("Welcome!"); 
    }
  };

  handlePageLoad();
  function decrementCount() {
    if (count <= 1000 && count > 100) {
      setCount((prevCount) => prevCount - 100);
   
    } else if (count <= 100 && count > 10) {
      setCount((prevCount) => prevCount - 10);
   
    } else if (count <= 10 && count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function incrementCount() {
    if (count == 10 || count == 100 || count == 1000) {
      window.alert(`Good job, count reached ${count}`);
    }
    
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
      console.log(count);
    
    } else if (count >= 10 && count < 100) {
      setCount((prevCount) => prevCount + 10);
      setBgColor("lightblue");
    
    } else if (count >= 100 && count < 1000) {
      setCount((prevCount) => prevCount + 100);
      setBgColor("lightgreen");
    
    } else if (count == 1000) {
      setIsButton(true);
      setBgColor("#242424");
    }
  }
  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <div className="card">
          <button onClick={incrementCount}>Press to increase</button>
        </div>
        <span style={{color:'#000', fontWeight:700}}>{count}</span>

        <div className="card">
          {isButton && (
            <button onClick={decrementCount}>Press to increase</button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
