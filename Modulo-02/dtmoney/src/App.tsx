import React from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}

export default App;
