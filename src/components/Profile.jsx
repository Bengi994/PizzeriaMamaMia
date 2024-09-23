const Profile = () => {
  const userEmail = "usuario@example.com"; 
  const handleLogout = () => {
    console.log("Cerrar sesión"); 
  };
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-4">Perfil del Usuario</h2>
      <p className="mb-4">Email: <strong>{userEmail}</strong></p>
      <button className="btn btn-danger btn-lg" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};
export default Profile;