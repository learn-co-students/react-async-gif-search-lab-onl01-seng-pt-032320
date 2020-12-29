// src/GifListContainer.js
import React from 'react';
import GiftList from '../components/GiftList';
import GiftSearch from '../components/GiftSearch';
import App from '../components/App'

 
class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      gifts: []
    };
  }

  handleOnSubmit = (event) => {
    const query = event.target.value 
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(giftData => {
        debugger 
        // this.setState({ gifts: giftData.gifts }))
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