import React from 'react'

const ConfirmRidePanel = ({ridePanelCloseRef, setIsRidePanelOpen}) => {
  return (
    <>
    <div className="text-2xl font-semibold mt-2 mb-4 w-full flex justify-between items-center">
        <h4>Confirm ride</h4>
        <h5
          ref={ridePanelCloseRef}
          onClick={() => {
            setIsRidePanelOpen(false);
          }}
          className="cursor-pointer opacity-0"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
      </div>

      {/* //*Vehicle list */}

      {/* //*Car */}
      <div className="flex items-center justify-between mb-2 w-full p-2 border-2 active:border-black border-gray-300 rounded-xl cursor-pointer">
        <img
          className="h-16 w-20 object-cover object-center bg-white"
          src="./assets/home/vehicles/car.png"
          alt="car"
        />

        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Uber Go{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-base">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>

        <h2 className="text-lg font-bold">Rs193.0</h2>
      </div>

      {/* //*Bike */}
      <div className="flex items-center justify-between mb-2 w-full p-2 border-2 active:border-black border-gray-300 rounded-xl cursor-pointer">
        <img
          className="h-16 w-20 object-cover object-center bg-white"
          src="./assets/home/vehicles/bike.jpeg"
          alt="bike"
        />

        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-base">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Moter Cycle rides
          </p>
        </div>

        <h2 className="text-lg font-bold">Rs65.0</h2>
      </div>

      {/* //*Auto */}
      <div className="flex items-center justify-between mb-2 w-full p-2 border-2 active:border-black border-gray-300 rounded-xl cursor-pointer">
        <img
          className="h-16 w-20 object-cover object-center bg-white"
          src="./assets/home/vehicles/auto.jpeg"
          alt="bike"
        />

        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-base">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>

        <h2 className="text-lg font-bold">Rs118.0</h2>
      </div>
    </>
  )
}

export default ConfirmRidePanel