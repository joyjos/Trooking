import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='fondoHeader'>
      <header>
        <div>
          <Link to='/' className='trooking'>
            Trooking
          </Link>
        </div>
        <div>
          <Link to='/misreservas'>
            <button className='misReservas'> Mis Reservas </button>
          </Link>
        </div>
      </header>
    </div>
  );
};
