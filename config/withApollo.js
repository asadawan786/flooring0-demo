import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import endpoint from '../config/endpoint';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credential: 'include'
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
