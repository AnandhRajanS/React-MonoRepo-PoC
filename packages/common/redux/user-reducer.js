
import { createSlice } from "@reduxjs/toolkit";

//const def="C:\Users\TPENTAPA\Downloads\react-native-monorepo\packages\common\assets\default.jpg"
const def={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFD6XbB_OrCN_rraoT5vZxGZ8LSSDPt2wiMxWyHs&s"}
const initialState = {
  userName: '',
  userEmailId: '',
  userPassword: '',
  userPhoneNumber: '',
  userProfile:def,
  isLoggedIn: false,
  sessionEmail:'',
};

export const user = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = {...state, ...action.payload};
      console.log(state);
      return state;
    },
    stateLogin: state => {
      state.isLoggedIn = true;
      return state;
    },
    setForgotPassword: (state, action) => {
      state.userPassword = action.payload;
      return state;
    },
    setProfile:(state,action)=>{
      state.userProfile=action.payload;
      return state;
    },
    stateLogout: state => {
      state = initialState;
      return state;
    },
    setSession: (state, action) => {
      state.sessionEmail = action.payload;
      return state;
    }
    
  },
});

export const {setUser, stateLogin, stateLogout, setForgotPassword,setProfile,setSession} = user.actions;
export default user.reducer;


