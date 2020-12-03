import React from 'react';

const GifList = props => {
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.key} src={gif.url} alt="gif" /> )}
        </div>
    )
}

export default GifList;