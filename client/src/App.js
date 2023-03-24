import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incomming) {
            return incomming;
          }
        },
        projects: {
          merge(existing, incomming) {
            return incomming;
          }
        },
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: cache,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Header />
          <div className="container m-auto py-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
