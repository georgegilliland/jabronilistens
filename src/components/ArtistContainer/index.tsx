import React from 'react';
import Vibrant from 'node-vibrant';
import ArtistImage from '../ArtistImage';
import ArtistInfo from '../ArtistInfo';
import './styles.css';

const getColors = async (imageUrl) => {
  const v = new Vibrant(imageUrl);
  return await v.getPalette((err, palette) => palette);
};

const ArtistContainer = ({ name, id, image }) => {

  const [vibrant, setVibrant] = React.useState<any>(null);
  const [muted, setMuted] = React.useState<any>(null)

  React.useEffect(() => {
    async function fetchColors() {
      if (vibrant === null && muted === null) {
        const palette = await getColors(image);
        setVibrant(palette.LightVibrant?.rgb)
        setMuted(palette.DarkMuted?.rgb)
      }
    }
    fetchColors() 
  }, []);

  return (
    <div className="ArtistContainer">
      {vibrant !== null && muted !== null ? 
      <>
        <ArtistImage image={image} />
        <ArtistInfo vibrant={vibrant} muted={muted} name={name} id={id} />
      </>
      :
      <div></div>
      }    
    </div>
  );
}

export default ArtistContainer;
