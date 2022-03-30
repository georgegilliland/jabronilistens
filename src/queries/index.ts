import { gql } from "@apollo/client";

export const GET_ARTISTS = gql`
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