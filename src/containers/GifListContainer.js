import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

  state = {
    gifs: null,
    key: '68PrD9VRbcKuY3Bk94I5IrIRAr1kLWhF'
  }

  handleSubmit = (query) => {
    if(!query){query="cat"}
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${this.state.key}&rating=g`)
    .then(res => res.json())
    .then(raw => this.setState({gifs: raw.data.slice(0,3)}));
  }

  clearState = () => {
    this.setState({gifs: null});
  }

  render() {
    return (
      <table width="100%"><tbody><tr>
      <td> < GifList gifs={this.state.gifs} /> </td>
      <td style={{verticalAlign: 'top'}}> < GifSearch handleSubmit={this.handleSubmit} clearState={this.clearState} /> </td>
      </tr></tbody></table>
    )
  }

}