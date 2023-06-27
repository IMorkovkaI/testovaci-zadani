import React, { useState, createContext } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  return (
    <FlightContext.Provider value={{ selectedFlight, setSelectedFlight, selectedSeat, setSelectedSeat }}>
    <React.Fragment>
      {children}
    </React.Fragment>
    </FlightContext.Provider>
  );
};