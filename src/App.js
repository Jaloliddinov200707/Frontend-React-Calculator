import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");

    const handleClik = (e) => {
      setResult(result.concat(e.target.name));
    }

    const clear = () => {
      setResult("");
    }

    const backspace = () => {
     setResult(result.slice(0, - 1)); 
    }
    
    const calculate = () => {
            setResult(eval(result).toString());
    }
    return (
      <>
         <div className="container">
            <from>
              <input type="text" value={result} />
            </from>

            <div className="keypad">
              <button className="highlight" onClick={clear} id="clear">Clear</button>
              <button className="highlight" onClick={backspace} id="backspace">C</button>
              <button className="highlight" name="/" onClick={handleClik}>&divide;</button>
              <button name="7" onClick={handleClik}>7</button>
              <button name="8" onClick={handleClik}>8</button>
              <button name="9" onClick={handleClik}>9</button>
              <button className="highlight" name="*" onClick={handleClik}>&times;</button>
              <button name="4" onClick={handleClik}>4</button>
              <button name="5" onClick={handleClik}>5</button>
              <button name="6" onClick={handleClik}>6</button>
              <button className="highlight" name="-" onClick={handleClik}>&ndash;</button>
              <button name="1" onClick={handleClik}>1</button>
              <button name="2" onClick={handleClik}>2</button>
              <button name="3" onClick={handleClik}>3</button>
              <button className="highlight" name="+" onClick={handleClik}>+</button>
              <button name="0" onClick={handleClik}>0</button>
              <button name="." onClick={handleClik}>.</button>
              <button className="highlight" onClick={calculate} id="result">=</button>
            </div>
         </div>
      </>
    )
}

export default App;
