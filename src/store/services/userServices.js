import axios from "axios";

const URL_BASE = process.env.REACT_APP_API_URL_BASE || "http://localhost:8000";

export const getUser = async (idUser) => {
  const url = `${URL_BASE}/api/users/getUserById/${idUser}`;
  const config = {
    method: "get",
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};
