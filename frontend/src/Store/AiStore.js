import { create } from "zustand"; 
import { axiosInstance } from "../lib/Axios.js";
import toast from "react-hot-toast";


export const useAiStore = create((set, get) => ({
    isreviewing:false, 

    review:async(code)=>{
        set({ isreviewing: true });
        try {
            const res = await axiosInstance.post("/ai/getreview",{code});
            toast.success("Code Reviewed successfully");
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }finally {
            set({ isreviewing: false });
          }
    }

    
}))