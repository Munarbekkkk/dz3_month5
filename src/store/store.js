import {createStore} from "redux";
import formReducer from "../redux/reducer/reducer.js";
const store = createStore(formReducer)
export default store