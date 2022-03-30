import { render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { GET_ARTISTS } from './queries';
import App from './App';

const artistMock = {
  request: {
    query: GET_ARTISTS,
    variables: {
      popularity: 30,
      updatedAt: "2022-03-26T00:00:00"
    }
  },
  result: {
    data: {
      artists: [
        {
          id: "5uvVjg5SwNjvNE4w7HlGJC",
          name: "Vasudeva",
          genres: ["instrumental math rock"],
          image: {
            link: "https://i.scdn.co/image/ab6761610000e5ebbd475ac5eca9c0d2d62719a6"
          }
        }
      ]
    },
    loading: false,
  },
};

describe('Tests', () => {

  test('renders loading icon', async () => {

    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>
    );
  
    const loadingContainer = getByTestId(/loading-icon-container/i);
    expect(loadingContainer).toBeInTheDocument()
  });

  test('renders artist(s)', async () => {
    const { findByText, getByTestId } = render(
      <MockedProvider mocks={[artistMock]} addTypename={false}>
        <App />
      </MockedProvider>
    );
  
    const loadingContainer = getByTestId(/loading-icon-container/i);
    expect(loadingContainer).toBeInTheDocument();
    
    const artistText = await findByText("Vasudeva");
    expect(artistText).toBeInTheDocument();
  });
});
