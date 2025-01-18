import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../../components/userComponents/panels/LocationSearchPanel";
import VehiclePanel from "../../components/userComponents/panels/VehiclePanel";
import ConfirmRidePanel from "../../components/userComponents/panels/ConfirmRidePanel";
const Home = () => {
  //*data container state for the location form
  const [locationData, setLocationData] = useState({
    pickup: "",
    destination: "",
  });
  //*for opening or closing the search panel
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  //*for opening or closing the vehicle panel
  const [isVehiclePanelOpen, setIsVehiclePanelOpen] = useState(false);

  //*for opening or closing the confirm ride panel
  const [isRidePanelOpen, setIsRidePanelOpen] = useState(false);

  //*form submit
  const locationFormSubmit = async (e) => {
    e.preventDefault();
  }

  //*handle panel change on click of input
  const handleInputClick = () => {
    setIsPanelOpen(true);
  }

  //*Ref variable for search panel
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  //*Ref variable for vehicle panel
  const vehiclePanelRef = useRef(null);
  const vehiclePanelCloseRef = useRef(null);

  //*Ref variables for confirm ride panel
  const ridePanelRef = useRef(null);
  const ridePanelCloseRef = useRef(null);

  //*gsap for search panel
  useGSAP(function(){
    if(isPanelOpen){
      gsap.to(panelRef.current, {
        height : "100%",
        padding: "14px"
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current, {
        height : "0%",
        padding: "0px"
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
    
  }, [isPanelOpen])

  //*gsap for vehicle panel
  useGSAP(function(){
    if(isVehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
      gsap.to(vehiclePanelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
      gsap.to(vehiclePanelCloseRef.current, {
        opacity: 0
      })
    }
  },[isVehiclePanelOpen])

   //*gsap for ride panel
   useGSAP(function(){
    if(isRidePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(0)'
      })
      gsap.to(ridePanelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(100%)'
      })
      gsap.to(ridePanelCloseRef.current, {
        opacity: 0
      })
    }
  },[isRidePanelOpen])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src="./assets/home/uber-logo.png"
        alt=""
        className="w-20 absolute top-2 left-2 bg-white rounded px-2"
      />

      {/* //*The map show */}
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover object-fit"
        />
      </div>

      {/* //*for the location search and the relative search result? */}
      <div className="absolute top-0 w-full h-screen flex flex-col justify-end">
        {/* //*input form for location and destination */}
        <div className="h-fit p-5 bg-white relative">
          <div className="flex items-center justify-between text-2xl font-semibold">
            <h4>Find a trip</h4>
            <h5 ref={panelCloseRef} onClick={()=>{setIsPanelOpen(false)}} className="cursor-pointer opacity-0"><i className="ri-arrow-down-wide-line"></i></h5>
          </div>
          <form onSubmit={locationFormSubmit}>
            <div className="line absolute h-16 w-[2px] top-[45%] left-10 bg-black rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              name="pickup_location"
              id="pickup_location"
              onClick={handleInputClick}
              onChange={(e) => {
                setLocationData({ ...locationData, pickup: e.target.value });
              }}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              name="destination_location"
              id="destination_location"
              onClick={handleInputClick}
              onChange={(e) => {
                setLocationData({
                  ...locationData,
                  destination: e.target.value,
                });
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* //*location search result */}
        <div
          ref={panelRef}
          className={`h-0 bg-[#f8f8f8] p-0`}
        >
          <LocationSearchPanel setIsPanelOpen={setIsPanelOpen} setIsVehiclePanelOpen={setIsVehiclePanelOpen}/>
        </div>
      </div>

      {/* //*vehicle show of the relative search result */}
      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 bg-white w-full p-3 translate-y-full">
            <VehiclePanel setIsVehiclePanelOpen={setIsVehiclePanelOpen} vehiclePanelCloseRef={vehiclePanelCloseRef} setIsRidePanelOpen={setIsRidePanelOpen} />
      </div>

      {/* //* Confirm ride panel */}
      <div ref={ridePanelRef} className="fixed z-10 bottom-0 bg-white w-full p-3 translate-y-full">
            <ConfirmRidePanel ridePanelCloseRef={ridePanelCloseRef} setIsRidePanelOpen={setIsRidePanelOpen} />
      </div>
        
    </div>
  );
};

export default Home;
