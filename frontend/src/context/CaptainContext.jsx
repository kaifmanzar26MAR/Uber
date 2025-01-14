import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const CaptainContextData = createContext();


export const useCaptain = () =>{
    const context = useContext(CaptainContextData);
    if(!context){
        throw new Error('useCaptain must be used within a CaptainProvider');
    }
    return context;
}


const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    
  return (
    <CaptainContextData.Provider value={{captain, setCaptain}}>
        {children}
    </CaptainContextData.Provider>
  )
}

export default CaptainContext