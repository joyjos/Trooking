import './Hotels.css';
import { useAxios } from '../../hooks/useAxios';
import { HotelCard } from '../HotelCard/HotelCard';

export const Hotels = () => {
  const { data: hotels } = useAxios('http://localhost:8080/api/hotels');

  return (
    <div className='fondoBody'>
      {hotels && hotels.map((hotel) => <HotelCard key={hotel.id} {...hotel} />)}
      ;
    </div>
  );
};
