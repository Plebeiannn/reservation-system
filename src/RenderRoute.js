import React from "react";
import UserSignIn from "./UserSignIn/UserSignIn";
import UserRegister from "./UserRegister/UserRegister";
import UserHome from "./UserComponents/UserHome";
import AdminSignIn from "./AdminSignIn/AdminSignIn";
import AdminHome from "./AdminComponents/AdminHome";

const RenderRoute = ({route, onInputChange, user, onRouteChange, loadUser, loadBooking, onSubmitBooking, loadAdmin}) => {
  switch (route) {
    case 'signin':
      return <UserSignIn onRouteChange={onRouteChange} loadUser={loadUser}/>;

    case 'register':
      return <UserRegister onRouteChange={onRouteChange} loadUser={loadUser}/>;

    case 'userhome':
      return <UserHome onRouteChange={onRouteChange} onInputChange={onInputChange} 
      user={user} onSubmitBooking={onSubmitBooking} loadBooking={loadBooking}/>;

    case 'adminsignin':
      return <AdminSignIn onRouteChange={onRouteChange} loadAdmin={loadAdmin}/>;

    case 'adminhome':
      return <AdminHome onRouteChange={onRouteChange}/>;

    default:
      return <UserSignIn onRouteChange={onRouteChange} loadUser={loadUser}/>;
  }
};

export default RenderRoute;