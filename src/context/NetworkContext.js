import { useState, createContext } from "react";

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [account, setAccount] = useState();
  return (
    <NetworkContext.Provider value={[account,setAccount]}>
      {children}
    </NetworkContext.Provider>
  );
};