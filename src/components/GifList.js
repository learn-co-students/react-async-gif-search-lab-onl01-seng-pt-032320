// src/GiftList.js
import React from 'react';
import GiftSearch from './GifSearch';
 
const GiftList = ({ gifts }) => (
  <div className="gift-list">
    { gifts.map(gift => <Book title={book.title} img_url={book.img_url} />) }
  </div>
)
 
export default BookList;