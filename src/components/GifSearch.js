import React from 'react'

class GifSearch extends React.Component {
    state = {
        query: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            Enter a Search Term
            <input onChange={event => this.setState({query: event.target.value})} type='text' value={this.state.query}></input>
            <input type='submit' value='Find Gifs'></input>
        </form>
        </div>
        
    )
    }


}



export default GifSearch