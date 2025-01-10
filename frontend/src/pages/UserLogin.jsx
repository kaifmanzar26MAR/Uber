import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
//*initialising the navigation
const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const [formData, setFormData] = useState({email: "", password:""});
  const userLoginSubmit = async (e) =>{
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, formData);
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      //*setting the token in the localstorage
      localStorage.setItem('token', data.token);
      navigate('/home');
    }else{
      console.log(response);
    }

  }

  return (
    <div className="p-7 h-screen justify-between flex flex-col">
      <div>
        <img src="./assets/home/uber-logo.png" alt="UBER" className="w-16 mb-4" />
        <form onSubmit={userLoginSubmit}>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input 
            type="email" 
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-7 border w-full text-lg placeholder:text-base"
            required 
            placeholder="email@example.com"
            onChange={(e)=>{setFormData({...formData, email: e.target.value})}}
          />
          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input 
            type="password" 
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-7 border w-full text-lg placeholder:text-base"
            required 
            placeholder="password"
            onChange={(e)=>{setFormData({...formData, password: e.target.value})}}
          />
          <button 
            className="bg-[#111] text-white font-semibold rounded px-3 py-3 mb-3  border w-full text-lg placeholder:text-base"
          >Login</button>
        </form>
        <p className="text-center">New Here? <Link to={'/signup'}  className=" text-blue-600">Create New Account</Link></p>
      </div>
      <div>
        <Link
            to={"/captain-login"}
            className="w-100 flex items-center justify-center bg-[#10b461] text-white font-semibold rounded px-3 py-3 mb-7  border w-full text-lg placeholder:text-base"
        >Sign in as Captain</Link>
      </div>
      
    </div>
  );
};

export default UserLogin;
