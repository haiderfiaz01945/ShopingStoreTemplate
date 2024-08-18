import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  is_Logged: false,
  Users: [
    {
      id: nanoid(),
      username: "haiderfiaz09@gmail.com",
      password: "12345",
    },
    {
      id: nanoid(),
      username: "bader@gmail.com",
      password: "123456",
    },
  ],
};

// Create a slice with a name, initial state, and reducers
export const UserSlice = createSlice({
  name: "UserLogin",
  initialState,
  reducers: {
    submitUser: (state, action) => {
      const { username, password } = action.payload;

      // Use some() to check if any user matches the credentials
      state.is_Logged = state.Users.some(
        (user) => user.username === username && user.password === password
      );

      if (state.is_Logged) {
        console.log("User credentials match!", state.is_Logged);
      } else {
        console.log("User credentials do not match.", state.is_Logged);
      }
    },
    SignupUser: (state, action) => {
      state.Users.push({ id: nanoid(), ...action.payload });
      console.log("User signed up successfully!", action.payload);
    },
  },
});

// Export the action creators and the reducer
export const { submitUser, SignupUser } = UserSlice.actions;
export default UserSlice.reducer;
