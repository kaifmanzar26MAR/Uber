import React from "react";
import { logoutCaptain } from "../../hooks/captainHooks";


const CaptainLogout = () => {
  logoutCaptain();

  return <>Loading...</>;
};

export default CaptainLogout;
