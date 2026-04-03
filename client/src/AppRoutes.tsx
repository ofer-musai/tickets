import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BuyTickets from './pages/BuyTickets/BuyTickets';
import CreateConcert from './pages/CreateConcert/CreateConcert';
import ConcertDetails from './pages/ConcertDetails/ConcertDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy/:id" element={<BuyTickets />} />
      <Route path="/concert/:id" element={<ConcertDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/create" element={<CreateConcert />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
