import React from 'react'

const GifList = props => {
  console.log(props)
  return(
    <div>
      {props.gifs.map(gif => <img key={gif} src={gif} alt="gif" />)}
    </div>
  )
}

export default GifList