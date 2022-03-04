import React from "react";
import "./styles.css";
const ArtistInfo = ({ vibrant, muted, name, genres }) => {
  const vibrantBackground = vibrant
    ? `rgb(${Math.round(vibrant[0])},${Math.round(vibrant[1])},${Math.round(
        vibrant[2]
      )})`
    : 'rgb(255,255,255)';

  const mutedText = muted
    ? `rgb(${Math.round(muted[0])},${Math.round(muted[1])},${Math.round(
      muted[2]
      )})`
    : 'rgb(0,0,0)';

  return (
    <div className="ArtistInfo" style={{ backgroundColor: vibrantBackground }}>
      <div className="InnerArtistInfoContainer" style={{ color: mutedText }}>
        <div className="ArtistTitle">{name}</div>
        <div className="ArtistGenres">{genres[0]}</div>
      </div>
    </div>
  );
};

export default ArtistInfo;
