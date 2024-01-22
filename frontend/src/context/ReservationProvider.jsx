// ReservationProvider.jsx
import { useState } from 'react';
import { ReservationContext } from './ReservationContext';

// eslint-disable-next-line react/prop-types
export const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState(null);

  const value = {
    reservation,
    setReservation,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};
