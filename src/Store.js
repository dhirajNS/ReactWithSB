
import { createStore } from "redux";

import rootReducers from "./reducers/ReducerIndex";

const store = createStore(rootReducers);
export default store;