import React, { Component } from 'react';

export default class GifList extends Component {

renderImages = () => {
  const gifs = this.props.gifs;
  if (gifs) { return gifs.map(gif => {return <li><img alt="" src={gif.images.original.url}></img></li>}) }
}

render() {
  return (
    <div>
      <ul>{this.renderImages()}</ul>
    </div>
  );
}

}

