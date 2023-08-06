import { useState, useContext, useEffect, createContext } from "react";

let AuthContex = createContext()

let AuthProvider = ({ children }) => {

    let [auth, setAuth] = useState({
        user: null,
        token: ""
    })
    useEffect(()=>{
    let data =localStorage.getItem("auth")

    if(data){
        let parsedData = JSON.parse(data)
        setAuth({
            ...auth,
            user:parsedData.user,
            token:parsedData.token
        })
    }
    },[])
    return (

        <AuthContex.Provider value = {[auth, setAuth] } >

        { children } 
        </AuthContex.Provider>


    )
}
let useAuth = () => useContext(AuthContex)

export { useAuth, AuthProvider }