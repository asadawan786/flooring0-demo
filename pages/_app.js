import { ApolloProvider } from 'react-apollo';
import withApollo from '../config/withApollo';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/globalStyles';
import 'antd/dist/antd.css';
const theme = {
  colors: {
    primary: '#0070f3'
  }
};
const App = ({ apollo, Component, pageProps, collapsed }) => {
  return (
    <ApolloProvider client={apollo}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout collapsed={collapsed}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default withApollo(App);
