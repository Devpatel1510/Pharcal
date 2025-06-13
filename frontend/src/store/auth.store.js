import { create } from "zustand";
import { axiosInstance } from "../lib/axios";



import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useauthstore = create((set) => ({
  authUser: null,

  isSigningup: false,
  isLoginin: false,
  isprofileupade: false,
  isUpdatingProfile: false,
  ischeckingAuth: false,
  onlineUsers: [],
  socket :null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      
    } catch (error) {
      set({ authUser: null });
      console.log("its erron in auth 12 ", error)
    } finally {
      set({ ischeckingAuth: false })

    }


  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup",data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      const audio = new Audio('/noti2.mp3'); 
        audio.play();
      

    } catch (error) {
      toast.error(error.response.data.message);
      console.log("hello1", error)
    } finally {
      set({ isSigningUp: false });
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
       const audio = new Audio('/noti2.mp3'); 
        audio.play();
      


    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logout successful");
      const audio = new Audio('/noti2.mp3'); 
        audio.play();
      
    } catch (error) {
      toast.error("Logout failed");
      console.log("Logout error:", error);
    }
  },



})
)


