import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const UserSignupSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-7 h-screen justify-between flex flex-col">
      <div>
        <img
          src="./assets/home/uber-logo.png"
          alt="UBER"
          className="w-16 mb-4"
        />
        <form onSubmit={UserSignupSubmit}>
          <h3 className="text-base mb-2 font-semibold">What's your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              className="bg-[#eeeeee] w-1/2 focus-within:outline-black rounded px-3 py-3  border  text-lg placeholder:text-base"
              required
              placeholder="First Name"
              onChange={(e) => {
                setFormData({ ...formData, firstname: e.target.value });
              }}
            />
            <input
              type="text"
              className="bg-[#eeeeee] w-1/2 focus-within:outline-black rounded px-3 py-3  border  text-lg placeholder:text-base"
              required
              placeholder="Last Name"
              onChange={(e) => {
                setFormData({ ...formData, lastname: e.target.value });
              }}
            />
          </div>
          <h3 className="text-base mb-2 font-semibold">What's your email</h3>
          <input
            type="email"
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-5 border w-full text-lg placeholder:text-base"
            required
            placeholder="email@example.com"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <h3 className="text-base mb-2 font-semibold">Enter Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 mb-5 border w-full text-lg placeholder:text-base"
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
          Already have an account?{" "}
          <Link to={"/login"} className=" text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] text-gray-800">
          By logging in, you agree to{" "}
          <span className="underline font-semibold">
            Uber's Terms of Service and Privacy Policy
          </span>
          . This includes consenting to the use of your data as outlined in our
          policies, and understanding that account security is your
          responsibility.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
