import React from "react";

function BookingSlots(props) {
  return (
      <div style={{ background: "red", padding: "8px", margin: "4px", borderRadius: "4px" }}>
        {props.value}
      </div>
  );
}

export default BookingSlots;