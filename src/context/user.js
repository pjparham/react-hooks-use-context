import React, { useState } from "react";

//create the Context
const UserContext = React.createContext();

//create the Provider
function UserProvider({ children }) {
    const[user, setUser] = useState(null);
    const [theme, setTheme] = useState("dark");
    return (
        <UserContext.Provider value={{ user, setUser, theme, setTheme }}>
            {children}
        </UserContext.Provider>
)}

export { UserContext, UserProvider };
