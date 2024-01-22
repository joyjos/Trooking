import './Reservas.css';
import { Calendario } from '../Calendario/Calendario';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import { useState } from 'react';

export const Reservas = () => {
  const { hotelId } = useParams();
  const { data: hotel } = useAxios(
    `http://localhost:8080/api/hotels/${hotelId}`
  );

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  if (!hotel) {
    return <div>Cargando...</div>;
  }

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
          <button className='botonConfirmar'>Reservar</button>
        </div>
      </div>
    </main>
  );
};
