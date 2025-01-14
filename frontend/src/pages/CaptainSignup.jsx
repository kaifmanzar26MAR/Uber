import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CaptainContext, { useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });
  const navigate  = useNavigate();
  const { captain, setCaptain } = useCaptain();
  const CaptainSignupSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`, formData);
    if(response.status === 200){
      setCaptain(response.captain);
      localStorage.setItem('captainToken', response.token);
      navigate('/captain-home');
    }else{
      console.log(response);
    }
  };

  return (
    <div className="p-7 h-screen justify-between flex flex-col">
      <div>
        <img
          src="./assets/driver/uber-driver-logo.jpg"
          alt="UBER"
          className="w-16 mb-4"
        />
        <form onSubmit={CaptainSignupSubmit}>
          <h3 className="text-base mb-2 font-semibold">
            What's our Captain's Name
          </h3>
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

          <h3 className="text-base mb-2 font-semibold">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 border w-1/2 text-lg placeholder:text-base"
              required
              placeholder="Vehicle Color"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  vehicle: { ...formData.vehicle, color: e.target.value },
                });
              }}
            />
            <input
              type="text"
              className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 border w-1/2 text-lg placeholder:text-base uppercase"
              required
              placeholder="Vehicle Plate"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  vehicle: { ...formData.vehicle, plate: e.target.value },
                });
              }}
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              type="number"
              className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 border w-1/2 text-lg placeholder:text-base"
              required
              placeholder="Vehicle Capacity"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  vehicle: { ...formData.vehicle, capacity: e.target.value },
                });
              }}
            />
            <select
              className="bg-[#eeeeee] focus-within:outline-black rounded px-3 py-3 border w-1/2 text-lg placeholder:text-base"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  vehicle: { ...formData.vehicle, vehicleType: e.target.value },
                });
              }}
            >
              <option>
                Select
              </option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="van">Van</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold rounded px-3 py-3 mb-3  border w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/captain-login"} className=" text-blue-600">
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

export default CaptainSignup;
