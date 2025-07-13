import { createContext, useContext, useState } from "react";

const TheContext = createContext();

export const AppProvider = ({ children }) => {
  const [onAdd, setOnAdd] = useState(true);
  
  return (
      <TheContext.Provider
      value={{
          onAdd,
          setOnAdd
        }}
        >
    {children}
  </TheContext.Provider>
);
};

export const useAppContext = () => useContext(TheContext)