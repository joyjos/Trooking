import './App.css';
import { AppRouter } from './router/AppRouter';
import { ReservationProvider } from './context/ReservationProvider';

function App() {
  return (
    <ReservationProvider>
      <AppRouter />
    </ReservationProvider>
  );
}

export default App;
