import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../../components/userComponents/LocationSearchPanel";
const Home = () => {
  //*data container state for the location form
  const [locationData, setLocationData] = useState({
    pickup: "",
    destination: "",
  });
  //*for opening or closing the panel
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  //*form submit
  const locationFormSubmit = async (e) => {
    e.preventDefault();
  }

  //*handle panel change on click of input
  const handleInputClick = () => {
    setIsPanelOpen(true);
  }

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  //*gsap
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
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src="./assets/home/uber-logo.png"
        alt=""
        className="w-20 absolute top-2 left-2 bg-white rounded px-2"
      />

      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover object-fit"
        />
      </div>

      <div className="absolute top-0 w-full h-screen flex flex-col justify-end">
        {/* //*input form for location and destination */}
        <div className="h-fit p-5 bg-white relative">
          <h5 ref={panelCloseRef} onClick={()=>{setIsPanelOpen(false)}} className="absolute right-6 top-6 text-2xl cursor-pointer opacity-0"><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
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
          className={`h-0 bg-slate-200 p-0`}
        >
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
