// src/GifListContainer.js
import React from 'react';
import GiftList from '../components/GiftList';
import GiftSearch from '../components/GiftSearch';

 
class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      gifts: []
    };
  }

  handleOnSubmit = (event) => {
    const query = event.target.value 
    
  }
 
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(giftData => this.setState({ gifts: giftData.gifts }))
  }
 
  render() {
    return ( <GiftList gifts={this.state.gifts} />
             <GiftSearch handleSubmit={this.handleOnSubmit} />
    )
  }
}
 
export default GifListContainer;