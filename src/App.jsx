import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import ButtonData from "./components/ButtonData"

const App = () => {

  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      setDisplayValue("0");
    } else if (buttonValue === "=") {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    } else {
      setDisplayValue((prevValue) => {
        if (prevValue === "0" && !["/", "*", "-", "+"].includes(buttonValue)) {
          return buttonValue;
        } else {
          return prevValue + buttonValue;
        }
      });
    }
  };

  const buttons = ButtonData.map( (buttonValue,index) => {
    return (
      <Button data={buttonValue} key={index} onClick={() => handleButtonClick(buttonValue)} /> 
    )
    
  })
  return (
    <>
      <div className="container">
        <main>
          <h1>Calculator</h1>
          <h2>{displayValue}</h2>
          <div>{buttons}</div>
        </main>
      </div>
    </>
  )
}

export default App