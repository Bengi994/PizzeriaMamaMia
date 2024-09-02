

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
      <div className="collapse navbar-collapse d-flex justify-content-between">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link border rounded p-1 m-1" href="#"><span role="img" aria-label="Home">🏠</span> Home</a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link border rounded p-1 m-1" href="#"><span role="img" aria-label="Profile">🔓</span> Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link border rounded p-1 m-1" href="#"><span role="img" aria-label="Logout">🔒</span> Logout</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link border rounded p-1 m-1" href="#"><span role="img" aria-label="Login">🔐</span> Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link border rounded p-1 m-1" href="#"><span role="img" aria-label="Register">🔐</span> Register</a>
              </li>
            </>
          )}
        </ul>
        <span className="navbar-text p-2">
          <button className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;