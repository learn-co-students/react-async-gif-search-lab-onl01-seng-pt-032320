import React, { Component }  from 'react'

class GifSearch extends Component{
    constructor(props){
        super(props);

        this.state = {
            search: ""
        }
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})} />
                </form>
            </div>
        )
    }
}

export default GifSearch