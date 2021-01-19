import React, { useState, useEffect, Fragment } from 'react'
import './index.css';

function Exercise3() {
  const [searchText, setSearchText] = useState('cat');
  const [giphy, setGiphy] = useState([]);

  useEffect(() => {
    fetchData(searchText)
    .then(res => res.json())
    .then(({data}) => setGiphy(data))
    .catch(err => {
      console.log(err);
    });
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  async function fetchData(searchText) {
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&limit=10&api_key=fxOjUXdV4qnW8JOnxNVd0Hr6tyJrusoA`);
  }

  const imgElms = giphy.map(gif => {
    return (
      <Fragment key={gif.id}>
        <img src={gif.images.downsized_medium.url} alt={gif.slug}/>
      </Fragment>
    )
  })

  return (
    <div className='Exercise-3'>
      <input onChange={handleChange} placeholder='Search on any gif image...' />
      <div className='img-container'>
        {imgElms}
      </div>
    </div>
  )
}

export default Exercise3
