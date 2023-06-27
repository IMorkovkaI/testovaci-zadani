import React, { useState, useContext } from 'react';
import FlightBooking from './FlightBooking';
import FlightDetails from './FlightDetails';
import { FlightContext } from './FlightContext';

const Flight = () => {
  const [dataList, setDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { selectedFlight, setSelectedFlight, selectedSeat, setSelectedSeat } = useContext(FlightContext);
  const [localSelectedSeats, setLocalSelectedSeats] = useState({});

  const handleInputSubmit = (userInput) => {
    const flights = [
      {
        "id": 1,
        "from": "Prague",
        "to": "London",
        "departure": "2023-06-10T10:00:00",
        "arrival": "2023-06-10T12:00:00",
        "duration": "2h",
        "price": 150,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": false },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 2,
        "from": "London",
        "to": "Paris",
        "departure": "2023-06-10T14:00:00",
        "arrival": "2023-06-10T16:00:00",
        "duration": "2h",
        "price": 200,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 3,
        "from": "Paris",
        "to": "Rome",
        "departure": "2023-06-10T09:00:00",
        "arrival": "2023-06-10T11:00:00",
        "duration": "2h",
        "price": 180,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": false },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 4,
        "from": "Rome",
        "to": "Barcelona",
        "departure": "2023-06-10T13:00:00",
        "arrival": "2023-06-10T16:00:00",
        "duration": "3h",
        "price": 250,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 5,
        "from": "Barcelona",
        "to": "Berlin",
        "departure": "2023-06-10T11:00:00",
        "arrival": "2023-06-10T13:00:00",
        "duration": "2h",
        "price": 170,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": false }
        ]
      },
      {
        "id": 6,
        "from": "Berlin",
        "to": "Vienna",
        "departure": "2023-06-10T09:30:00",
        "arrival": "2023-06-10T11:30:00",
        "duration": "2h",
        "price": 190,
        "seats": [
          { "id": 1, "number": "A1", "available": false },
          { "id": 2, "number": "A2", "available": false },
          { "id": 3, "number": "B1", "available": false },
          { "id": 4, "number": "B2", "available": false }
        ]
      },
      {
        "id": 7,
        "from": "Vienna",
        "to": "Amsterdam",
        "departure": "2023-06-10T10:15:00",
        "arrival": "2023-06-10T12:15:00",
        "duration": "2h",
        "price": 180,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 8,
        "from": "Amsterdam",
        "to": "Madrid",
        "departure": "2023-06-10T13:30:00",
        "arrival": "2023-06-10T16:30:00",
        "duration": "3h",
        "price": 250,
        "seats": [
          { "id": 1, "number": "A1", "available": false },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 9,
        "from": "Madrid",
        "to": "Athens",
        "departure": "2023-06-10T11:30:00",
        "arrival": "2023-06-10T14:30:00",
        "duration": "3h",
        "price": 280,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 10,
        "from": "Athens",
        "to": "Vienna",
        "departure": "2023-06-11T09:00:00",
        "arrival": "2023-06-11T12:00:00",
        "duration": "3h",
        "price": 220,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 11,
        "from": "Vienna",
        "to": "Lisbon",
        "departure": "2023-06-11T14:30:00",
        "arrival": "2023-06-11T18:30:00",
        "duration": "4h",
        "price": 300,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": false },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": false }
        ]
      },
      {
        "id": 12,
        "from": "Lisbon",
        "to": "Vienna",
        "departure": "2023-06-11T23:00:00",
        "arrival": "2023-06-12T02:00:00",
        "duration": "3h",
        "price": 190,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 13,
        "from": "Prague",
        "to": "London",
        "departure": "2023-06-11T17:00:00",
        "arrival": "2023-06-11T19:00:00",
        "duration": "2h",
        "price": 150,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true },
        ]
      },
      {
        "id": 14,
        "from": "London",
        "to": "Paris",
        "departure": "2023-06-11T14:00:00",
        "arrival": "2023-06-11T16:00:00",
        "duration": "2h",
        "price": 200,
        "seats": [
          { "id": 1, "number": "A1", "available": false },
          { "id": 2, "number": "A2", "available": false },
          { "id": 3, "number": "B1", "available": false },
          { "id": 4, "number": "B2", "available": false }
        ]
      },
      {
        "id": 15,
        "from": "Paris",
        "to": "Rome",
        "departure": "2023-06-11T09:00:00",
        "arrival": "2023-06-11T11:00:00",
        "duration": "2h",
        "price": 180,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": false },
          { "id": 4, "number": "B2", "available": true }
        ]
      },
      {
        "id": 16,
        "from": "Rome",
        "to": "Barcelona",
        "departure": "2023-06-11T06:00:00",
        "arrival": "2023-06-11T09:00:00",
        "duration": "3h",
        "price": 250,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": false },
          { "id": 4, "number": "B2", "available": false }
        ]
      },
      {
        "id": 17,
        "from": "Barcelona",
        "to": "Berlin",
        "departure": "2023-06-11T01:00:00",
        "arrival": "2023-06-11T03:00:00",
        "duration": "2h",
        "price": 370,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": false },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": false }
        ]
      },
      {
        "id": 18,
        "from": "Berlin",
        "to": "Vienna",
        "departure": "2023-06-11T09:30:00",
        "arrival": "2023-06-11T11:30:00",
        "duration": "2h",
        "price": 220,
        "seats": [
          { "id": 1, "number": "A1", "available": true },
          { "id": 2, "number": "A2", "available": true },
          { "id": 3, "number": "B1", "available": true },
          { "id": 4, "number": "B2", "available": true }
        ]
      }
    ]

    if (userInput.from && userInput.to) {
      const filteredData = flights.filter((item) =>
        item.from.toLowerCase().includes(userInput.from.toLowerCase()) &&
        item.to.toLowerCase().includes(userInput.to.toLowerCase())
      );
      setDataList(filteredData);
      setErrorMessage(filteredData.length === 0 ? "Sorry, couldn't find the flight for you. Try again." : '');
      setSelectedFlight(null);
    } else {
      setDataList([]);
      setErrorMessage('');
      setSelectedFlight(null);
    }
  };

  const handleBookFlight = (flight, selectedSeat) => {
    setSelectedFlight(flight);
    setSelectedSeat(selectedSeat);
    setDataList([flight]);
  };

  const handleSeatSelection = (flightId, seatNumber) => {
    setLocalSelectedSeats((prevSelectedSeats) => ({
      ...prevSelectedSeats,
      [flightId]: seatNumber,
    }));
  };

  const handleCancelInput = () => {
    setDataList([]);
    setErrorMessage('');
    setSelectedFlight(null);
    setSelectedSeat(null);
    setLocalSelectedSeats({});

    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className='h-24 flex justify-center items-center shadow'>
        <h2 className="uppercase font-bold text-3xl text-center">Flight Booking App</h2>
      </div>
      <FlightBooking onInputSubmit={handleInputSubmit} />

      {errorMessage && <p className='font-bold flex justify-center mt-2 mb-2'>{errorMessage}</p>}

      {selectedFlight ? (
        <FlightDetails
          onBack={() => setSelectedFlight(null)}
          displayedFlights={dataList}
          flight={selectedFlight}
          selectedSeat={selectedSeat || localSelectedSeats[selectedFlight.id]}
        />
      ) : (
        dataList
          .filter((item) => item.seats.some((seat) => seat.available))
          .map((item) => (
            <div key={item.id}>
              <div className='grid justify-center m-2'>
                <p className='font-bold mt-2 mb-2'>From: {item.from}</p>
                <p className='font-bold mt-2 mb-2'>To: {item.to}</p>
                <p className='font-bold mt-2 mb-2'>Departure: {item.departure}</p>
                <p className='font-bold mt-2 mb-2'>Arrival: {item.arrival}</p>
                <p className='font-bold mt-2 mb-2'>Price: {item.price}$</p>
                <p className='font-bold mt-2 mb-2'>Select seat:</p>
                <select
                  className='font-bold mt-2 mb-2 border-4 border-white'
                  value={localSelectedSeats[item.id] || ''}
                  onChange={(e) => handleSeatSelection(item.id, e.target.value)}
                >
                  <option value='' disabled>Choose seat</option>
                  {item.seats.map((seat) => (
                    seat.available && (
                      <option className='mt-2 mb-2' key={seat.id} value={seat.number}>
                        {seat.number}
                      </option>
                    )
                  ))}
                </select>
              </div>

              <div className='grid justify-center'>
                <button
                  className='font-bold flex justify-center m-5 bg-green-100 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                  onClick={() => handleBookFlight(item, selectedSeat || localSelectedSeats[item.id])}
                  disabled={!localSelectedSeats[item.id]}
                >
                  Book a Flight
                </button>
              </div>
              <div className='grid justify-center'>
                <button
                  className='font-bold flex justify-center m-5 bg-red-100 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                  onClick={handleCancelInput}
                >
                  Cancel input
                </button>
              </div>
            </div>
          ))
      )}
    </React.Fragment>
  );
};

export default Flight;