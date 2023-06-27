import React from 'react';
import { FlightProvider } from './components/FlightContext';
import Flight from './components/Flight';

const App = () => {
  return (
    <FlightProvider>
    <React.Fragment>
      <Flight />
      </React.Fragment>
    </FlightProvider>
  );
};

export default App;
