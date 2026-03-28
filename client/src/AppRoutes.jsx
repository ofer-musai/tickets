import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BuyTickets, { BuyTicketsReturn } from './pages/BuyTickets/BuyTickets';
import CreateConcert from './pages/CreateConcert/CreateConcert';
import ConcertDetails from './pages/ConcertDetails/ConcertDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy/:id" element={<BuyTickets />} />
      <Route path="/return" element={<BuyTicketsReturn />} /> {/* New route for return page */}
      <Route path="/create" element={<CreateConcert />} />
      <Route path="/concert/:id" element={<ConcertDetails />} />
    </Routes>
  );
}