import { createContext, ReactNode, useContext, useState } from "react";

type LocalContextType = {
  isAuthenticated: boolean;
  login: () => void;
  signup: () => void;
  logout: () => void;
};

const LocalContext = createContext<LocalContextType | undefined>(undefined);

export function LocalProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  const login = () => setAuthenticated(true);
  const signup = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  const values = { isAuthenticated, login, signup, logout };

  return (
    <LocalContext.Provider value={values}>{children}</LocalContext.Provider>
  );
}

export const useLocalContext = () => {
  const context = useContext(LocalContext);
  if (!context) {
    throw new Error("useLocalContext must be used within a LocalProvider");
  }
  return context;
};
