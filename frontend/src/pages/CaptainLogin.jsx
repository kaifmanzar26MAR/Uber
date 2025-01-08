import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const captainLoginSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-7 h-screen justify-between flex flex-col">
      <div>
        <img
          src="./assets/driver/uber-driver-logo.jpg"
          alt="UBER"
          className="w-16 mb-4"
        />
        <form onSubmit={captainLoginSubmit}>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            type="email"
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-7 border w-full text-lg placeholder:text-base"
            required
            placeholder="email@example.com"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-7 border w-full text-lg placeholder:text-base"
            required
            placeholder="password"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <button className="bg-[#111] text-white font-semibold rounded px-3 py-3 mb-3  border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to={"/captain-signup"} className=" text-blue-600">
            Register as a Captain.
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="w-100 flex items-center justify-center bg-[#d5622d] text-white font-semibold rounded px-3 py-3 mb-7  border w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
