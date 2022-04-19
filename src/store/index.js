import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

const storeCombined = combineReducers({
  userReducer,
  postReducer,
});
const configureStore = () => {
  const store = createStore(
    storeCombined,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return { store };
};
export default configureStore;
