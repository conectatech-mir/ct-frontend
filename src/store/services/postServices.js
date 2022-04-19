import axios from "axios";
const URL_BASE = process.env.REACT_APP_API_URL_BASE || "http://localhost:8000";
export const getPostUser = async (idUser) => {
  const url = `${URL_BASE}/api/posts/postUsuario/${idUser}`;
  const res = await axios.get(url);
  return res.data.posts;
};
export const getPostPending = async (idUser) => {
  const url = `${URL_BASE}/api/posts/postsPending/${idUser}`;
  const res = await axios.get(url);
  return res.data.posts;
};
export const getPostAccepted = async (idUser) => {
  const url = `${URL_BASE}/api/posts/postsAccepted/${idUser}`;
  const res = await axios.get(url);
  return res.data.posts;
};
export const updatePostOffered = async (idPost, postUpdate) => {
  const url = `${URL_BASE}/api/posts/postoffered/${idPost}`;
  const responsePost = await axios.patch(url, postUpdate, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return responsePost.data;
};
export const getPostProfesional = async (idUser) => {
  const url = `${URL_BASE}/api/posts/postProfesional`;
  const res = await axios.get(url);
  return res.data.posts;
};
