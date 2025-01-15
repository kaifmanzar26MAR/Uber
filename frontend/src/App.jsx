import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectedWrapper from "./secure/UserProtectedWrapper";
import UserLogout from "./components/userComponents/UserLogout";
import CaptainHome from "./pages/captain/CaptainHome";
import NotFound from "./pages/error/NotFound";
import CaptainProtectedWrapper from "./secure/CaptainProtectedWrapper";
import CaptainLogout from "./components/captainComponents/CaptainLogout";
const App = () => {
  return (
    <div>
      <Routes>
        //?Start Page
        <Route path="/" element={<Start />} />
        /*
        ################################################################################
        */ //*User Routes
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route
          path="/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        /*
        ################################################################################
        */ //*Captain Routes
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/captain-logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          }
        />
        /*
        ################################################################################
        */ //!404 Error Page
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
