import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <h2 style={{ textAlign: 'center' }}>Dictionary App</h2>

        <SearchForm />
        <Results />
      </div>
    </QueryClientProvider>
  );
}

export default App;
