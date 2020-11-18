import React, { Component } from "react";

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    getGifs(term='hello'){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}E&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then((resp) => resp.json())
        .then(({data}) =>{
        let giflist = data.map(gif=>gif.images.original.url)
            this.setState({
            gifs: giflist
        })})
    }

    componentDidMount() {
        this.getGifs()
    }
    
  render() {
    return <div>

    <GifSearch />
    <GifList gifs={this.state.gifs}/>
        
    </div>;
  }
}

export default GifListContainer;
