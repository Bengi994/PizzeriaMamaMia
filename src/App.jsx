import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

import Home from './pages/Home';
import Cart from "./pages/Cart";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound'; 
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
