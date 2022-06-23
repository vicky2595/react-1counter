import React, { useState } from 'react';
import  './style.scss';
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 className={count > 0 ? 'postive' : count < 0 ? 'negative' : null}>
        {count}
      </h1>
      <div className="button-wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
