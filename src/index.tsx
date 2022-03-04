import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: "https://thejabronispotifydatapipeline.herokuapp.com/api",
  cache: new InMemoryCache(),
  headers: {
    'Authorization': "123546"
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
