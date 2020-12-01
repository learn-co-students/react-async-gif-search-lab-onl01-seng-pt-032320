import React, { Component } from 'react'

 class GifSearch extends Component {

    state = {
        search: ''
    }

    handleInput(event) {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.search(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.search} onChange={event => this.handleInput(event)} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch
