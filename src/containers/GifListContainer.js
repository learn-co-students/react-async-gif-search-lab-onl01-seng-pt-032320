import React, { Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GiflistContainer extends Component {
    constructor() {
        super()
        this.state = {
            imgUrls: []
        }
    }

    fetchGiphy = (query) => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=081fcKWAf0PTx1nrbrYJnlsBrFb3gIhU&rating=g'
        const KEY = '081fcKWAf0PTx1nrbrYJnlsBrFb3gIhU'
        const TAIL = `&api_key=${KEY}&limit=3`
        const request_url = `${URL}${query}${TAIL}`;
        console.log(`fetching ${query}`);

        fetch(request_url)
        .then(response => response.json())
        .then(json => {
            console.log(json.data);
            this.setState({
                imgUrls: json.data.map(gif => gif.images.original.url)
            })
        })
        .catch(errors => console.log.errors(errors))
    }

    render() {
        return(
            <div>
               <GifSearch fetchGiphy={this.fetchGiphy} /> 
               <GifList urls={this.state.imageUrls}/>
            </div>
        )
    }

}

export default GiflistContainer