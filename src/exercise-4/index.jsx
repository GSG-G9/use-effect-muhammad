import React, { useState, useEffect, Fragment } from 'react'
import './index.css';

function Exercise4() {
  const [name, setName] = useState('robo');
  const [imageUrl, setImage] = useState('');

  useEffect(() => {
    setImage(`https://robohash.org/${name}.png`);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className='Exercise-4'>
      <input onChange={handleChange} placeholder='Search on any robo name..' />
      <div className='img-container'>
        <img src={imageUrl} alt=""/>
      </div>
    </div>
  )
}

export default Exercise4;
