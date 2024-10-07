import { createContext, useState, useEffect  } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        console.error("Error en login:", data.message);
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const register = async (userDetails) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        console.error("Error en registro:", data.message);
      }
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,  
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();

      if (response.ok) {
        setProfile(data);
      } else {
        console.error("Error obteniendo perfil:", data.message);
      }
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null); 
    setProfile(null);  
  };

  useEffect(() => {
    if (token) {
      getProfile();  
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
