import {
  getPostAccepted,
  getPostPending,
  getPostUser,
  updatePostOffered,
  getPostProfesional,
  getPostAcceptedProfessional,
} from "../services/postServices";
import {
  LOAD_POST_USER,
  LOAD_PENDING_POST_USER,
  LOAD_RESOLVED_POST_USER,
  UPDATE_POST_OFFERED,
  LOAD_POST_PROFESSIONAL,
  LOAD_RESOLVED_POST_LOAD_POST_PROFESSIONAL,
} from "../types/postTypes";
const loadPost = (post) => ({
  type: LOAD_POST_USER,
  payload: post,
});
const loadPostPending = (post) => ({
  type: LOAD_PENDING_POST_USER,
  payload: post,
});
const loadPostAccepted = (post) => ({
  type: LOAD_RESOLVED_POST_USER,
  payload: post,
});
const loadPostAcceptedProfessional = (post) => ({
  type: LOAD_RESOLVED_POST_LOAD_POST_PROFESSIONAL,
  payload: post,
});
const updatePostoffered = (post) => ({
  type: UPDATE_POST_OFFERED,
  payload: post,
});
const loadPostProfessional = (post) => ({
  type: LOAD_POST_PROFESSIONAL,
  payload: post,
});
export const fetchAllPost = (idUser) => async (dispatch) => {
  const post = await getPostUser(idUser);
  dispatch(loadPost(post));
};
export const fetchAllPostProfessional = () => async (dispatch) => {
  const post = await getPostProfesional();
  dispatch(loadPostProfessional(post));
};
export const fetchAllPostPending = (idUser) => async (dispatch) => {
  const post = await getPostPending(idUser);
  dispatch(loadPostPending(post));
};
export const fetchAllAccepted = (idUser) => async (dispatch) => {
  const post = await getPostAccepted(idUser);
  dispatch(loadPostAccepted(post));
};
export const patchPostOffered = (idPost, postUpdate) => async (dispatch) => {
  const post = await updatePostOffered(idPost, postUpdate);
  dispatch(updatePostoffered(post));
};
export const fetchAllAcceptedProfessional = (idUser) => async (dispatch) => {
  const post = await getPostAcceptedProfessional(idUser);
  dispatch(loadPostAcceptedProfessional(post));
};
