import React, { Component } from 'react'


class GifSearch extends Component {
    constructor(props) {
        super();

        this.state = {
           query: '' 
        }
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    handleSubmit = (event) => {
        event.preceventDefault();
        this.props.fetchGiphy(this.state.query)
    }

    render(){
        return(
            <div>
              <h1>{this.state.query}</h1> 
              <form onSubmit={event => this.handleSubmit(event)}>
                  <input type="text" 
                    onChange={event => this.handleChange(event)}
                    value={this.state.query}
                    />

                  <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default GifSearch