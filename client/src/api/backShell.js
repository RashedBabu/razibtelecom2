import axios from "axios";

export const getTouch = async () => {
  return await axios.get("/api/shell");
};

export const create = async (data) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/shell", data);
};

export const geteditTouch = async (id) => {
  return await axios.get(`/api/shell/${id}`);
};
export const editTouch = async (id, shell) => {
  return await axios.put(`/api/shell/${id}`, shell);
};

export const deleteShell = async (id) => {
  return await axios.delete(`/api/shell/${id}`);
};
