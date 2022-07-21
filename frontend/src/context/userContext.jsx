import React, { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

function TokenContextProvider({ children }) {
  const [token, setToken] = useState("");
  const tokenShare = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <UserContext.Provider value={tokenShare}>{children}</UserContext.Provider>
  );
}

export default TokenContextProvider;
