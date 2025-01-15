import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const fetchUser = async (token) =>{
    try {
      if(!token){
        return;
      }
  
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, 
        {
          headers:{
            Authorization : `Bearer ${token}`
          }
        }
      );
  
      if(!response || response.status !== 200){
        throw new Error(response.response.data.message);
      }
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
      localStorage.removeItem('token');
      navigate("/login");
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      navigate("/login");
    }
    if(!user){
      fetchUser(token);
    }
    setLoading(false);
  }, [user]);

  if(loading){
    return <>Loading...</>
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
