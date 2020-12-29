// src/GiftList.js
import React from 'react';
import GifListContainer from '../containers/GifListContainer.js'
 
const GifList = ({ gifts }) => {
    return (
        <ul>
            { gifts.map(gift => <li key={gift.id}>{gift.type} - <img src={gift.images.original.url} alt=""></img></li>) }
        </ul>
        )
}
 
export default GifList;