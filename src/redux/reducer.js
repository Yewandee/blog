import { createSlice } from "@reduxjs/toolkit";

export const recipeReducer = createSlice({
  name: "user",
  initialState: {
    mode: "light",
    opensnackbar: false,
    message: "",
    signedInUser: [],
    loggedInUser: [],
    typeofProfilePage: "Dashboard",
    openModal: false,
    openModal2: false,
    selectedCollection: {},
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setSnackBarOpen: (state, action) => {
      state.opensnackbar = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setSelectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
    },
    toggleopenModal: (state, action) => {
      state.openModal = !state.openModal;
    },
    toggleopenModal2: (state, action) => {
      state.openModal2 = !state.openModal2;
    },
    setSignedUpUser: (state, action) => {
      state.signedInUser = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setProfileIndex: (state, action) => {
      state.typeofProfilePage = action.payload;
    },
  },
});

export const {
  setMode,
  setSnackBarOpen,
  setMessage,
  toggleopenModal2,
  setSignedUpUser,
  setLoggedInUser,
  setProfileIndex,
  toggleopenModal,
  setSelectedCollection,
} = recipeReducer.actions;

export default recipeReducer.reducer;