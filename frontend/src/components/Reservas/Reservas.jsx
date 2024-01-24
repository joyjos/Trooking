import './Reservas.css';
import { Calendario } from '../Calendario/Calendario';
import { useParams, useNavigate } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import { useState } from 'react';
import { useReservation } from '../../context/ReservationContext';

export const Reservas = () => {
  const { hotelId } = useParams();
  const { data: hotel } = useAxios(
    `http://localhost:8080/api/hotels/${hotelId}`
  );
  const { reservation, setReservation } = useReservation();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  if (!hotel) {
    return <div>Cargando...</div>;
  }

  const handleReserve = () => {
    if (hotel) {
      setReservation({
        hotelName: hotel.name,
        startDate,
        endDate,
        photoUrl: hotel.photoUrl,
        description: hotel.description,
      });
      navigate(
        `/misreservas/${reservation.hotelName}/${reservation.startDate}`
      );
    }
  };

  return (
    <main className='paginaReservas'>
      <div className='containerReservas'>
        <p className='completatuReserva'> Completa tu reserva</p>
        <p>{hotel.name}</p>
        <img src={hotel.photoUrl} alt={hotel.name} className='imagenReserva' />
        <div className='contenedorCalendario'>
          <Calendario
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <div className='hacerReserva'>
          <button className='botonConfirmar' onClick={handleReserve}>
            Reservar
          </button>
        </div>
      </div>
    </main>
  );
};
