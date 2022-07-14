import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0);
  const handleClick = () => setState(v => ++v);

  return (
    <div onClick={handleClick}>{state}</div>
  );
}

export default App;
