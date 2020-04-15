import { combineReducers } from "redux";
import userReducer from "./User/user-reducer";
import cartReducer from "./Cart/cart-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
