import './MisReservas.css';

import useReservation from '../../context/ReservationContext';
import { Like } from '../Like/Like';

export const MisReservas = () => {
  const { reservationInfo } = useReservation();

  return (
    <main className='contenedormisReservas'>
      {reservationInfo && (
        <>
          <div className='reservation-message'>
            <p>
              {`¡Enhorabuena! Has reservado el hotel "${reservationInfo.hotelName}" desde`}{' '}
              <b>{`${reservationInfo.startDate.toDateString()}`}</b> {`hasta`}{' '}
              <b>{`${reservationInfo.endDate.toDateString()}`}</b>
            </p>
          </div>
          <div>
            <section className='fichaReserva'>
              <section>
                <img
                  src={reservationInfo.photoUrl}
                  alt={reservationInfo.hotelName}
                  className='fotoFicha'
                ></img>
              </section>
              <section className='fichaHotel'>
                <div className='descripcionFicha'>
                  <p>{reservationInfo.hotelName}</p>
                  <Like />
                </div>
                <p className='masinfoFicha'>{reservationInfo.description}</p>
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
