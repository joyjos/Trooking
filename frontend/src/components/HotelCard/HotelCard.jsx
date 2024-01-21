import './HotelCard.css';
import { Link } from 'react-router-dom';
import { Like } from '../Like/Like';

export const HotelCard = ({ ...hotel }) => {
  return (
    <div key={hotel.id}>
      <section className='container'>
        <section>
          <img
            src={hotel.photoUrl}
            alt={hotel.name}
            className='fotoHotel'
          ></img>
        </section>
        <section className='hotel'>
          <div className='descripcionHotel'>
            <p>{hotel.name}</p>
            <Like />
          </div>
          <p className='masInfo'>{hotel.description}</p>
          <section className='precio'>
            <p>
              <b>{hotel.pricePerNight} €</b>
            </p>
            <p>1 noche, 2 adultos</p>
            <Link to={`/reservas/${hotel.id}`} className='hotel-link'>
              <p className='Reservar'>Reservar</p>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
};
