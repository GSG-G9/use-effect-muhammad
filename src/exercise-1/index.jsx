import React, { useState, useEffect } from 'react'
import './index.css';

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.addEventListener('mousedown', incrementCount);
    return () => {
      document.removeEventListener('mousedown', incrementCount);
    }
  });
  const incrementCount = (e) => {
    setCount(c => c + 1);
  }
  return (
    <div className='Counter'>
      <p>{count}</p>
    </div>
  )
}

export default Counter
