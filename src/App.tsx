import React, { useState } from 'react';
//import { Base, TestA, InterfaceTestA, MapTestA, DefaultProps, Event, EventB, EventC } from './components/Base'
//import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

// components
import { Home } from './components/Home'
import { First } from './components/First'

function App() {

  // Material UI color pallet
  const theme = createTheme({
    palette: {
      primary: {
        main: '#004378',
      },
      secondary: {
        main: '#222',
      },
    },
  });

  // Router State
  const [route, setRoute] = useState('/')

  return (
    <>
      <ThemeProvider theme={theme}>

        { route === '/' ? <Home setroute={setRoute} /> : ''}
        { route === '/test' ? <First /> : ''}

      </ThemeProvider>
    </>
  );
}

export default App;
