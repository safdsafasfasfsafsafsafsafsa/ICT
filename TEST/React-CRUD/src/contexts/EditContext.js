import { createContext, useState } from "react";
export const EditContext = createContext();

export function EditProvider({ children }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditContext.Provider>
  );
}
