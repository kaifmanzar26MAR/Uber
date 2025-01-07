import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7 h-screen justify-between flex flex-col">
      <div>
        <img src="./assets/home/uber-logo.png" alt="UBER" className="w-16 mb-4" />
        <from>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input 
            type="email" 
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-7 border w-full text-lg placeholder:text-base"
            required 
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input 
            type="password" 
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-7 border w-full text-lg placeholder:text-base"
            required 
            placeholder="password"
          />
          <button 
            className="bg-[#111] text-white font-semibold rounded px-3 py-3 mb-3  border w-full text-lg placeholder:text-base"
          >Login</button>
        </from>
        <p className="text-center">New Here? <Link to={'/signup'}  className=" text-blue-600">Create New Account</Link></p>
      </div>
      <div>
        <button
            className="bg-[#10b461] text-white font-semibold rounded px-3 py-3 mb-7  border w-full text-lg placeholder:text-base"
        >Sign in as Captain</button>
      </div>
      
    </div>
  );
};

export default UserLogin;
