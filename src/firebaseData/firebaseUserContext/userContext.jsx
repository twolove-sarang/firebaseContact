import { createContext, useContext, useEffect, useState } from "react";
import { login, loginObserver, logout } from "../firebaseAuth/AuteFirebase";

const UserContext = createContext();
export function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    loginObserver((user) => setUser(user));
  }, []);

  return (
    <UserContext.Provider value={{ user, id: user && user.id, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
