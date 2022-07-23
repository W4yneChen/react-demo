import { useState } from 'react';

export function SingleDiff() {
  const [stateA, setStateA] = useState(<div key="xxx">xxx</div>);
  const [stateB, setStateB] = useState(<div key="xxx">xxx</div>);
  const [stateC, setStateC] = useState(<div key="xxx">xxx</div>);

  const handleClick = () => {
    setStateA(<div key="zzz">zzz</div>);
    setStateB(<p key="xxx">xxx</p>);
    setStateC(<div key="xxx">zzz</div>);
  };

  return (
    <div onClick={handleClick}>
      <div>{stateA}</div>
      <div>{stateB}</div>
      <div>{stateC}</div>
    </div>
  );
}

export function ArrayDiff() {
  const [state, setState] = useState(['A', 'B', 'C', 'D', 'E']);
  const handleClick = () => {
    setState(['A', 'D', 'C', 'B', 'F']);
  };

  return (
    <div onClick={handleClick}>
      { state.map(v => (<div key={v}>{v}</div>)) }
    </div>
  );
}