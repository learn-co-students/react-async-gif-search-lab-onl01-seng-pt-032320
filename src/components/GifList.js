import React from 'react';

const GifList = (props) => {
    console.log("GifList Props", props)
    return (
          <ul>
          {props.gifs.map(gif => <img key={gif.id} src={gif.url} alt="" /> )}
          </ul>
    )
  }
  
  export default GifList