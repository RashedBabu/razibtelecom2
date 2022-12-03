import axios from "axios";

export const getTouch = async () => {
  return await axios.get("/api/sim");
};

export const create = async (data) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/sim", data);
};

export const geteditTouch = async (id) => {
  return await axios.get(`/api/sim/${id}`);
};
export const editTouch = async (id, sim) => {
  return await axios.put(`/api/sim/${id}`, sim);
};

export const deleteSim = async (id) => {
  return await axios.delete(`/api/sim/${id}`);
};
