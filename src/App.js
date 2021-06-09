import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = event => {
    setTextInput(event.target.value);
    setTextOutput('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    switch (event.nativeEvent.submitter.name) {
      case 'lower':
        setTextOutput(textInput.toLowerCase());
        break;
      case 'upper':
        setTextOutput(textInput.toUpperCase());
        break;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <input 
          type="submit"
          name="lower"
          value="to lower case"
        />
        <input 
          type="submit"
          name="upper"
          value="TO UPPER CASE"
        />
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
