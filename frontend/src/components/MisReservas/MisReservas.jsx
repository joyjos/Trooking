import './MisReservas.css';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useReservation } from '../../context/ReservationContext';
import { Like } from '../Like/Like';

export const MisReservas = () => {
  const { reservation, setReservation } = useReservation();
  const { hotelName, startDate } = useParams();

  useEffect(() => {
    // Lógica para obtener la información de la reserva basada en hotelName y startDate
    const fetchedReservation = startDate;

    // Actualiza el estado del contexto con la nueva reserva
    setReservation(fetchedReservation);
  }, [hotelName, startDate, setReservation]);

  return (
    <main className='contenedormisReservas'>
      {reservation && (
        <>
          <div className='reservation-message'>
            <p>
              {`¡Enhorabuena! Has reservado el hotel "${reservation.hotelName}" desde`}{' '}
              <b>{`${reservation.startDate.toDateString()}`}</b> {`hasta`}{' '}
              <b>{`${reservation.endDate.toDateString()}`}</b>
            </p>
          </div>
          <div>
            <section className='fichaReserva'>
              <section>
                <img
                  src={reservation.photoUrl}
                  alt={reservation.hotelName}
                  className='fotoFicha'
                ></img>
              </section>
              <section className='fichaHotel'>
                <div className='descripcionFicha'>
                  <p>{reservation.hotelName}</p>
                  <Like />
                </div>
                <p className='masinfoFicha'>{reservation.description}</p>
                <div className='derecha'>
                  <button className='botonVerde'> Reservado</button>
                </div>
              </section>
            </section>
          </div>
        </>
      )}
    </main>
  );
};
