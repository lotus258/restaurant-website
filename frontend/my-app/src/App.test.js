import {render, fireEvent, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import { fetchAPI } from "./Components/MimicAPI";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTime function', () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayFormatted = `${year}-${month}-${day}`;
  let availableTimes;

  fetchAPI(todayFormatted).then(times => {
       availableTimes = times;
       render(<BookingForm availableTimes={availableTimes} />);
       const resDate = screen.getByTestId("res-date");
       expect(todayFormatted).toEqual(resDate.value);
  }).catch(error => {console.error('Error:', error.message)});
})

test('updateTimes function', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const setSelectedDate = jest.fn();
  render(<BookingForm availableTimes={availableTimes} setSelectedDate={setSelectedDate} />);

  const updatedAvailableTimes = ['14:00', '15:00', '16:00'];
  const selectedDate = "2024-04-15";
  const resDate = screen.getByTestId("res-date");
  fireEvent.change(resDate, { target: { value: selectedDate } });

  setTimeout(() => {
    const updatedTimeOptions = screen.getAllByTestId("timeOption").map(option => option.textContent);
    expect(updatedTimeOptions).toEqual(updatedAvailableTimes);
    done();
  }, 1000);
});