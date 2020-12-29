import React from 'react';
 
class GiftSearch extends React.Component {
  state = {
    input: ""
  }
 
  handleInputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleInputChange(event)}
            value={this.state.input}
          />
          <input type="submit"/>
        </form>

        </div>
    )
  }
}
 
export default GiftSearch;