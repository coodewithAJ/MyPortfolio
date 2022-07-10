
import { createContext, useState } from "react";

export const FavContext = createContext()

const FavContextProvider=({children})=>{
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
  const[phone,setPhone] = useState("")
    
    return(
        <FavContext.Provider value={{name,setName,email,setEmail,phone,setPhone}}>
            {children}

        </FavContext.Provider>

    )
}

export default FavContextProvider;