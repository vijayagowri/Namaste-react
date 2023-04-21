import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../utilis/Hooks/cartSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
});

export default store;
