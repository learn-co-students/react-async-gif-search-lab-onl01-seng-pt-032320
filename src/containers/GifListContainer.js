// src/GifListContainer.js
import React from 'react';
import GiftList from '../components/GifList.js';
import GiftSearch from '../components/GifSearch.js';
import App from '../components/App.js'

 
class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      gifts: []
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    const query = event.target.value 
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(giftData => {
        this.setState({ gifts: giftData.data.slice(0,3) })
    })
}
 
  render() {
    return ( <div>
                <GiftList gifts={this.state.gifts} />
                <GiftSearch handleSubmit={this.handleOnSubmit} />
             </div>
    )
  }
}
 
export default GifListContainer;