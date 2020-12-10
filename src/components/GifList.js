import React, { Component } from 'react'

class GifList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //          urls: 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=081fcKWAf0PTx1nrbrYJnlsBrFb3gIhU&rating=g'
    //     }
    // }

  render() {
    return (
      <ul>
        {this.props.urls.map(url => (<li><img src={url} alt="alt"/></li>))}
      </ul>
    )
  }
}

export default GifList;
