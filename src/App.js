import React from 'react';
import { Provides } from 'react-redux';
import { ThemeProvider } from 'style-components
import { Reset } from 'styled-reset';

import store from './redux/store';
import Home from './pages/Home';
import theme from './Theme';

function App() {
  return (
    <Provider store={store}>
     <ThemeProvider them={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
    </Provider>
  );   
}

export default App;
