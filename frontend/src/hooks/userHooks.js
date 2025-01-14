import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const userLogout = async () => {
  const { user, setUser } = useContext(UserDataContext);
 
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return true;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      localStorage.removeItem("token");
      setUser(null);
      return true;
    } else {
      console.log(error);
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { userLogout };
