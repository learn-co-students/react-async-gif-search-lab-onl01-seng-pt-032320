import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        term: ''
    }

    handleInput(event){
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.search(this.state.term)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.term} onChange={event => this.handleInput(event)}  />
                </form>
            </div>
        );
    }
}

export default GifSearch;