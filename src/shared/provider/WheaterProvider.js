
import React,{ createContext, useState} from "react";

export const WheaterContext = createContext()

export const WheaterProvider = (props) => {
    const [wheater, setWheater] = useState(null)

    return(
<WheaterContext.Provider value={[wheater, setWheater]}>

    {props.children}
</WheaterContext.Provider>

    )
}
