import React from 'react';
import './styles.css'
const ArtistImage = ({ image }) => {
  return (
    <div className="ArtistImage">
       <img src={image} />
    </div>
  );
}

export default ArtistImage;
