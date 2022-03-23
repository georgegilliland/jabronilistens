import React from "react";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import LandingPage from "./components/LandingPage/LandingPage";
import ArtistContainer from "./components/ArtistContainer/index";
import Loading from './components/Loading/Loading';

const GET_ARTISTS = gql`
  query($popularity: Int, $updatedAt: String ) {
    artists(input: { popularity: $popularity, updatedAt: $updatedAt }) {
      id
      name
      genres
      image {
        link
      }
    }
  }
`;

function App() {
  
  const { data, loading } = useQuery(GET_ARTISTS, {
    variables: {
        popularity: 30,
        updatedAt: moment().startOf('week').subtract(1,'d').format('YYYY-MM-DDT00:00:00')
    }
  });

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="App">
      <LandingPage />
      {data.artists.map(item =>{
        return <ArtistContainer key={item.id} name={item.name} genres={item.genres} image={item.image.link} />
      })}
    </div>
  );
}

export default App;
