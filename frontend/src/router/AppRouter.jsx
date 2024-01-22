import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ReservasPage } from '../pages/ReservasPage';
import { MisReservasPage } from '../pages/MisReservasPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/reservas/:hotelId' element={<ReservasPage />} />
        <Route path='/misreservas' element={<MisReservasPage />} />
      </Routes>
    </BrowserRouter>
  );
};
