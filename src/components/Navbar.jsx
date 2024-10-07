import { Link,useNavigate  } from "react-router-dom";
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { totalAmount } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); 

  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout();  // Llamar a la función logout del contexto
    navigate('/login');  // Redirigir a la página de inicio después de cerrar sesión
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
    <div className="collapse navbar-collapse d-flex justify-content-between">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link border rounded p-1 m-1" to="/"><span role="img" aria-label="Home">🏠</span> Home</Link>
        </li>
        {token ? (
          <>
            <li className="nav-item">
              <Link className="nav-link border rounded p-1 m-1" to="/profile"><span role="img" aria-label="Profile">🔓</span> Profile</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link border rounded p-1 m-1 btn btn-link" onClick={handleLogout}><span role="img" aria-label="Logout">🔒</span> Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link border rounded p-1 m-1" to="/login"><span role="img" aria-label="Login">🔐</span> Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link border rounded p-1 m-1" to="/register"><span role="img" aria-label="Register">🔐</span> Register</Link>
            </li>
          </>
        )}
      </ul>
      <span className="navbar-text p-2">
        <Link to="/cart">
          <button className="btn btn-outline-info">
            🛒 Total: ${totalAmount.toLocaleString()} 
          </button>
        </Link>
      </span>
    </div>
  </nav>
  );
};

export default Navbar;
