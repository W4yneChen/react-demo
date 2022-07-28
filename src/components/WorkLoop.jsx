import { useState } from 'react';

export function WorkLoop() {
  const [state, setState] = useState(0);

  const handleClick = () => setState(v => ++v);

  return (
    <div onClick={handleClick}>{state}</div>
  );
}