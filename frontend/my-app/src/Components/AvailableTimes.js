import BookingSlots from "./BookingSlot";

function AvailableTimes(props) {
  const availableTimes = props.availableTimes || [];

  return (
    availableTimes.map((time, index) => (
        <option key={index} data-testid="timeOption">
            <BookingSlots key={time} value={time} />
        </option>
    ))
  );
}

export default AvailableTimes;
