import { useState, useContext, useEffect, createContext } from "react";

let AuthContex = createContext()

let AuthProvider = ({ children }) => {

        let [auth, setAuth] = useState({
            user: null,
            token: ""
        })
        return ( < AuthContex.Provider value = {
                [auth, setAuth]
            } > {children}
        </ AuthContex.Provider>)
        }
        let useAuth = () => useContext(AuthContex)

        export { useAuth, AuthProvider }