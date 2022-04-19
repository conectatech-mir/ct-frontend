import { LOAD_USER } from "../types/userTypes";
import { getUser } from "../services/userServices";

const loadUser = (user) => ({
  type: LOAD_USER,
  payload: user.data,
});

export const fetchUser = (idUser) => async (dispatch) => {
  const user = await getUser(idUser);
  dispatch(loadUser(user));
};
