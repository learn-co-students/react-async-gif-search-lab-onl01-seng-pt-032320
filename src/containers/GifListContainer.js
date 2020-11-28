import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {
    state = { 
        gifs: [] 
    }

   

    render() {
      return (
        <div>
            <GifSearch fetchGifs={this.fetchGifs} /> 
            <GifList gifs={this.state.gifs} />
        </div>

      )
    }

    fetchGifs = (query = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.map(gif => gif.images.original.url).splice(0, 3)
            })
        })
      }

    componentDidMount() {
        this.fetchGifs()
      }
  }

export default GifListContainer 