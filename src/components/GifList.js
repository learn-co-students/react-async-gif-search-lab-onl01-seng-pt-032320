import React, { Component } from 'react'

 class GifList extends Component {


    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => <li><img key={gif} src={gif} alt='gif'/></li>)}
                </ul>
               
            </div>
        )
    }
}

export default GifList
