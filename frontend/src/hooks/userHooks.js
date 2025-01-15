import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const userLogout = async () => {
  const { user, setUser } = useContext(UserDataContext);
 
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(!response || response.status !== 200){
      throw new Error(response.response.data.message);
    }
    localStorage.removeItem("token");
    setUser(null);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { userLogout };
