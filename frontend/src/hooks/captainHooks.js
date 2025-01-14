import axios from "axios";
import { useCaptain } from "../context/CaptainContext";



const getCaptainProfile = async () =>{
    const {setCaptain} = useCaptain();
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
        setCaptain(response.data.captain);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const logoutCaptain = async () =>{

}

export {getCaptainProfile};