import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGifs = (query = 'dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=eWfDNfa1Q1zeIoCchc73TVQVmKKt6cou&rating=g`)
    .then(response => response.json())
    .then(jsonResponse => {
      this.setState({
        gifs: [jsonResponse.data[0].url, jsonResponse.data[1].url, jsonResponse.data[2].url]
      })
    })
  }

  componentDidMount() {
    this.fetchGifs()
  }


  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}