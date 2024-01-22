import { createContext, useContext } from 'react';

export const ReservationContext = createContext();

export const useReservation = () => {
  return useContext(ReservationContext);
};
