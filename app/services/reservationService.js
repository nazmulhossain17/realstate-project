import axios from "axios";

export const getReservations = async () => {
  const response = await axios.get("http://localhost:3000/api/reservations");
  return response.data;
};
