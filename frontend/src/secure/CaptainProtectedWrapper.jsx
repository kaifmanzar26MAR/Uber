import React, { useEffect } from 'react'
import {useCaptain} from "../context/CaptainContext"
import { useNavigate } from 'react-router-dom';
import { getCaptainProfile } from '../hooks/captainHooks';

const CaptainProtectedWrapper = ({children}) => {
    const {captain, setCaptain} = useCaptain();
    const navigate = useNavigate();


    useEffect(()=>{
        //*getting token form local storage
        //*we can also create a hook for fetching the profile of the user using the cookie
        const captainToken = localStorage.getItem('captainToken');
        if(!captainToken){
            navigate('/captain-login');
        }
    }, [captain])
    
  return (
    <>{children}</>
  )
}

export default CaptainProtectedWrapper