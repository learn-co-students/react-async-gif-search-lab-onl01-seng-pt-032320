import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

 class GifListContainer extends Component {

    state = {
        gifs: []
    }

    accessGifs = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=c99GB5sISjU4c99YUMU9XQ9XXEMnaydI&rating=g&limit=3')
        .then(response => response.json())
        .then(({data}) => {
            let gifList = data.map(gif => gif.images.original.url)
            this.setState({
                gifs: gifList
            })
        })
    }

    componentDidMount() {
        this.accessGifs()
    }
    
    render() {
        return (
            <div>
                <GifSearch search={this.accessGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
    
    
    
}

export default GifListContainer;