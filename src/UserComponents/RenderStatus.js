import React from "react";
import BookingForm from "./BookingForm";


const RenderStatus= ({route}) => {
  switch (route) {
    case 'pending':
      return <div>Pending Page</div>;
    case 'rescheduled':
      return <div>Rescheduled</div>;
    case 'checked':
      return <div>Health Checklist</div>;
    case 'confirmed':
      return <div>Details</div>;
    default:
      return <BookingForm/>;
  }
};

export default RenderStatus;