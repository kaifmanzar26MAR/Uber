import React, { useEffect, useState } from "react";
import { useCaptain } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import { getCaptainProfile } from "../hooks/captainHooks";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const { captain, setCaptain } = useCaptain();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const fetchCaptain = async (token) => {
    try {
      if (!token) {
        return;
      }
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/captains/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response || response.status !== 200) {
        throw new Error(response.response.data.message);
      }
      setCaptain(response.data.captain);
    } catch (error) {
      console.log(error);
      setCaptain(null);
      localStorage.removeItem('captainToken');
      navigate("/captain-login");
    }
  };
  useEffect(() => {
    const captainToken = localStorage.getItem("captainToken");
    if (!captainToken) {
      setCaptain(null);
      navigate("/captain-login");
    }
    if(!captain){
      fetchCaptain(captainToken);
    }
    setLoading(false);
   
  }, [captain]);

  if(loading){
    return <>Loading...</>
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
