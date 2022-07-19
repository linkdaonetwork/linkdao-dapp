import { useState, createContext } from "react";

export const ConnectContext = createContext();

export const ConnectProvider = ({ children }) => {
  const [provider, setProvider] = useState();
  return (
    <ConnectContext.Provider value={[provider,setProvider]}>
      {children}
    </ConnectContext.Provider>
  );
};