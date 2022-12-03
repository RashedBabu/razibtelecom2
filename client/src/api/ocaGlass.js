import axios from "axios";

export const getOca = async () => {
  return await axios.get("/api/oca");
};

export const create = async (data) => {


  return await axios.post("/api/oca", data);
};


export const geteditOca = async (id) => {
  return await axios.get(`/api/oca/${id}`);
};
export const editOca = async (id, oca) => {
  return await axios.put(`/api/oca/${id}`, oca);
};

export const deleteOca = async (id) => {
  return await axios.delete(`/api/oca/${id}`);
};
