import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
    constructor(props){
        super(props)
        this.state ={
            gifs:[]
        }
    }
    
    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

  

    fetchGifs = (search = "") =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=X9ppfbcnctzI5Ric5x6Vqy82mCwIyvK7&rating=g`)
        .then(res => res.json())
        .then(({data}) =>{
            this.setState({gifs: data.map( gif => ({url: gif.images.original.url}) ) })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }
}

export default GifListContainer