// src/GiftList.js
import React from 'react';
import GifListContainer from '../containers/GifListContainer'
 
const GiftList = ({ gifts }) => (
  <div className="gift-list">
    { gifts.map(gift => <Book title={book.title} img_url={book.img_url} />) }
  </div>
)
 
export default BookList;