import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event => this.setState({query: event.target.value})} placeholder="gif description"/>
          <input type="submit" value="Search GIFS" />
        </form>
      </div>
    )
  }

}

export default GifSearch