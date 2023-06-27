import React, { useState, useContext } from 'react';
import { FlightContext } from './FlightContext';

const FlightDetails = ({ displayedFlights }) => {
  const { selectedFlight, selectedSeat, setSelectedFlight } = useContext(FlightContext);
  const [showReservation, setShowReservation] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleShowReservation = () => {
    setShowReservation(true);
    const availableFlights = displayedFlights.filter(flight => flight.seats.some(seat => seat.available === true));
    setFilteredFlights(availableFlights);
  };


  return (
    <React.Fragment>
      <div className="grid justify-center container mx-auto mt-10">
        {showReservation ? (
          <React.Fragment>
            {filteredFlights.length > 0 ? (
              <div>
                <p className='font-bold flex justify-center mt-2 mb-2 text-2xl text-blue-500 '>Reserved Flight</p>
                <ul className="border border-gray-600">
                  {filteredFlights.map((flight) => (
                    <li className='font-bold' key={flight.id}>
                      <ul>
                        <li>From: {flight.from}</li>
                        <li>To: {flight.to}</li>
                        <li>Departure: {flight.departure}</li>
                        <li>Arrival: {flight.arrival}</li>
                        <li>Price: {flight.price}$</li>
                        {selectedFlight && selectedFlight.id === flight.id && (
                        <li>Selected Seat: {selectedSeat}</li>
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-red-500 text-2xl font-bold text-lg mb-5">No saved flights with available seats found.</p>
            )}
          </React.Fragment>
        ) : (
          <div>
            <p className="text-green-500 text-2xl font-bold text-lg mb-5">Thanks, you reserved a flight</p>
            <button className='font-bold flex justify-center m-5 bg-blue-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => handleShowReservation()}>Show a reservation</button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default FlightDetails;