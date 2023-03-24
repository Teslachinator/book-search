import { createReducer } from "@reduxjs/toolkit";
import { setButtonValue } from "./actions";

const initialState = {
  buttonValue: null,
};

// export const buttonValueReducer = createReducer(initialState, {
//   handleFilterChange: (state, action) => {
//     state.buttonValue = action.payload;
//   },
// });

// import { createSlice } from "@reduxjs/toolkit";

// const bookSlice = createSlice({
//   name: "book",
//   initialState: {
//     filter: "",
//     sorting: "",
//   },
//   reducers: {
//     updateFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//     updateSorting: (state, action) => {
//       state.sorting = action.payload;
//     },
//   },
// });

// export const { updateFilter, updateSorting } = bookSlice.actions;
// export default bookSlice.reducer;

// // export const SET_CATEGORY = "SET_CATEGORY";

// export const setCategory = (category) => {
//   return {
//     type: SET_CATEGORY,
//     category,
//   };
// };

// const initialState = {
//   category: "",
// };

// const appReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CATEGORY:
//       return {
//         ...state,
//         category: action.category,
//       };
//     default:
//       return state;
//   }
// };
// export default appReducer;
