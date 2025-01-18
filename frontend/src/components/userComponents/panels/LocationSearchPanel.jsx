import React from "react";

const LocationSearchPanel = ({ setIsPanelOpen, setIsVehiclePanelOpen }) => {
  const locations = [
    "C18, Clara SoftTech, Noida Sector1, UP, 893023.",
    "C19, InfoTech Solution, Noida Sector1, UP, 893023.",
    "C20, ABC Developers, Noida Sector2, UP, 893024",
    "C21, Haritage Park , Noida Sector2, UP, 893024.",
  ];
  const handleLocationSelect = () => {
    setIsPanelOpen(false);
    setIsVehiclePanelOpen(true);
  };
  return (
    <div className="flex flex-col gap-2">
      {locations.map((location, index) => {
        return (
          <div
            className="flex gap-4 items-center mt-1 justify-start border-2 active:border-black border-white rounded bg-white p-2 hover:bg-slate-50  hover:border-slate-50 cursor-pointer"
            onClick={handleLocationSelect}
            key={index}
          >
            <h2 className="bg-slate-200 h-12 flex items-center justify-center w-12 aspect-square rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
