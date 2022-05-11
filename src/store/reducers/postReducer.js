import {
  LOAD_POST_USER,
  LOAD_PENDING_POST_USER,
  LOAD_RESOLVED_POST_USER,
  UPDATE_POST_OFFERED,
  LOAD_POST_PROFESSIONAL,
  LOAD_RESOLVED_POST_LOAD_POST_PROFESSIONAL,
} from "../types/postTypes";

const initialState = {
  posts: [],
  postsPending: [],
  postsAccepted: [],
  updatePost: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_USER:
      return { ...state, posts: action.payload };

    case LOAD_PENDING_POST_USER:
      return { ...state, postsPending: action.payload };
    case LOAD_RESOLVED_POST_USER:
      return { ...state, postsAccepted: action.payload };
    case LOAD_RESOLVED_POST_LOAD_POST_PROFESSIONAL:
      return { ...state, postsAccepted: action.payload };
    case UPDATE_POST_OFFERED:
      return { ...state, updatePost: action.payload };
    case LOAD_POST_PROFESSIONAL:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
export default postReducer;
