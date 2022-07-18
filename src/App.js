import { useState } from 'react';
import './App.css';

function ArrayDiff() {
  const [state, setState] = useState([1, 2, 3]);
  const handleClick = () => {
    const a = state[1];
    const b = state[2];
    setState([1, b, a]);
  };

  return (
    <div onClick={handleClick}>
      { state.map(v => (<div key={v}>{v}</div>)) }
    </div>
  );
}

function TextDiff() {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState(c => ++c);
  };

  return (
    <div onClick={handleClick}>{state}</div>
  );
}

function App() {
  return (
    // <ArrayDiff />
    <TextDiff />
  )
}

export default App;
