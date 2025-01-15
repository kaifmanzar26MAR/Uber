import axios from "axios";
import { useCaptain } from "../context/CaptainContext";



const getCaptainProfile = async () =>{
    const captainToken = localStorage.getItem("captainToken");
    try {
        if(!captainToken){
            return;
        }
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`,
            {
                headers:{
                    Authorization : `Bearer ${captainToken}`
                }
            }
        );
        if(!response || response.status !== 200){
            return null;
        }
        return response.data.captain;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const logoutCaptain = async () =>{
    const {setCaptain} = useCaptain();
    try {
        const captainToken = localStorage.getItem("captainToken");
        if (!captainToken) {
          setCaptain(null);
          return;
        }
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/captains/logout`,
          {
            headers: {
              Authorization: `Bearer ${captainToken}`,
            },
          }
        );
        if(!response || response.status !== 200){
          throw new Error(response.response.data.message);
        }
        localStorage.removeItem("captainToken");
        setCaptain(null);
      } catch (error) {
        console.log(error);
        return false;
      }
}

export {getCaptainProfile, logoutCaptain};