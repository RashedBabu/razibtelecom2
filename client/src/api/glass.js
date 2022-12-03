import axios from "axios";

export const getTouch = async () => {
  return await axios.get("/api/glass");
};

export const create = async (data) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/glass", data);
};

export const geteditTouch = async (id) => {
  return await axios.get(`/api/glass/${id}`);
};
export const editTouch = async (id, glass) => {
  return await axios.put(`/api/glass/${id}`, glass);
};

export const deleteGalss = async (id) => {
  return await axios.delete(`/api/glass/${id}`);
};

