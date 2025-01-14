import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    //*getting token form local storage
    //*we can also create a hook for fetching the profile of the user using the cokkie
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }else{
      
    }
  }, [user]);

  return <>{children}</>;
};

export default UserProtectedWrapper;
