import api from './api';

export const createBooking = async () => {
  return await api.post('/booking/booking-create');
};

export const getAllBookings = async () => {
    const res = await api.get('/booking/getAllBookings');
    return res.data;
  };
  