import { createContext, useState } from "react";
export const IdContext = createContext();

export function IdProvider({ children }) {
  const [targetId, setTargetId] = useState("");

  return (
    <IdContext.Provider value={{ targetId, setTargetId }}>
      {children}
    </IdContext.Provider>
  );
}
