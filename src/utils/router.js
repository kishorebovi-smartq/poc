import { Routes, Route } from 'react-router-dom';
import LandingPage from "../components/landing";
import Login from "../components/login";
import Dashboard from '../components/dashboard';

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Router