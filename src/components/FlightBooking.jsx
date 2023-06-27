import React, { useState } from 'react';

const FlightBooking = ({ onInputSubmit }) => {
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');

  const handleFromInputChange = (event) => {
    setFromInput(event.target.value);
  };

  const handleToInputChange = (event) => {
    setToInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = {
      from: fromInput,
      to: toInput,
    };
    onInputSubmit(inputData);
  };

  return (
    <React.Fragment>
      <div className='grid justify-center space-y-5 pb-10'>
        <form onSubmit={handleSubmit}>
        <div>
          <p className='font-bold'>Flight from:</p>
          <input className='border-4 border-white' type="text" value={fromInput} onChange={handleFromInputChange} />
        </div>
        <div>
          <p className='font-bold'>Flight to:</p>
          <input className='border-4 border-white' type="text" value={toInput} onChange={handleToInputChange} />
          </div>        
          <div className='grid justify-center'>
            <button className='font-bold flex justify-center items-center mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' type="submit">Search</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FlightBooking;