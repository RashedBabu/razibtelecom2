import axios from "axios";

export const getLcd = async () => {
  return await axios.get("/api/body");
};

export const create = async (body) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/body", body);
};

export const geteditLcd = async (id) => {
  return await axios.get(`/api/body/${id}`);
};
export const editLcd = async (id, body) => {
  return await axios.put(`/api/body/${id}`, body);
};

export const deleteBody = async (id) => {
  return await axios.delete(`/api/body/${id}`);
};

