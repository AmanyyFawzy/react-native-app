import {createStore} from "redux";

import FavReducer from "./Reducers/FavReducer";


const myStore = createStore(FavReducer);
export default myStore;