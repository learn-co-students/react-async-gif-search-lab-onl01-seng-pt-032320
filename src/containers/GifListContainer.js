import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </div>
    )
  }

  fetchGifs = (query = "kanye") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=eLM2qu3CbEgzVf7rMtabVghmtP3uVSPu&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
          console.log("fetch data", data)
        this.setState({gifs: data.map(gif => ({url: gif.images.original.url, id: gif.id } ) ) })
      })
  }
}

export default GifListContainer