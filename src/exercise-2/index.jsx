import React, { useState, useEffect, useRef } from 'react'
import './index.css';

function ColorEffect() {
  const [xCoor, setXCoor] = useState(0);
  const [yCoor, setYCoor] = useState(0);
  const [color, setColor] = useState('');
  const pElm = useRef();

  useEffect(() => {
    const pCurrent = pElm.current;
    pElm.current.addEventListener('mousemove', changeColor);
    return () => {
      pCurrent.removeEventListener('mousemove', changeColor);
    }
  });
  const changeColor = (e) => {
    setXCoor(e.offsetX);
    setYCoor(e.offsetY);
    setColor('dodgerblue');
    if (xCoor > e.path[0].clientWidth/2) {
      setColor('tomato');
    }
  }
  return (
    <div className='ColorEffect'>
      <p ref={pElm} style={{backgroundColor: color}}>I am now on X: <span>{xCoor}</span> and Y: <span>{yCoor}</span></p>
    </div>
  )
}

export default ColorEffect
