import './Hotels.css';
import { useAxios } from '../../hooks/useAxios';
import { HotelCard } from '../HotelCard/HotelCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from 'react';

export const Hotels = () => {
  const { data: hotels } = useAxios('http://localhost:8080/api/hotels');

  const [searchTerm, setSearchTerm] = useState('');
  const onSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const filteredHotels = hotels?.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className='fondoBody'>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
      />
      {filteredHotels &&
        filteredHotels.map((hotel) => <HotelCard key={hotel.id} {...hotel} />)}
      ;
    </main>
  );
};
