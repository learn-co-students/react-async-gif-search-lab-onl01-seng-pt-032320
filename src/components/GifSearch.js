import React, { Component } from 'react';

export default class GifSearch extends Component {

constructor() {
  super()
  this.state = { search: '' }
}

handleSearch = (e) => { this.setState({search: e.target.value}) }

render() {
  return (
  <div>
  <input type="text" onChange={e => this.handleSearch(e)} value={this.state.search} />
  <button onClick={() => this.props.handleSubmit(this.state.search)}>Find GIFs</button>
  <button onClick={this.props.clearState}>Clear</button>
  </div>
  )
}

}
