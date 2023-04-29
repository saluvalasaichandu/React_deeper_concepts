import React,{useState}from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const[showParagraph,setShowParagraph]=useState(false);
  console.log("App is Running");
  const toggleParagraphHandler=()=>{
    setShowParagraph(!showParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <h2>React deeper concepts</h2>
      {showParagraph&&<p>This is New paragragh</p>}
      <Button onClick={toggleParagraphHandler}>Show Toggled Praragraph</Button>
    </div>
  );
}

export default App;
